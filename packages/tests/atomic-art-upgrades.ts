import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AtomicArtUpgrades } from "../../target/types/atomic_art_upgrades";
import { PROGRAM_ID, AtomicArtUpgradesClient } from "../client";
import { expect } from "chai";
// @ts-ignore
import testAuthority from "./fixtures/id.json";
import { Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { Account, createMint, getOrCreateAssociatedTokenAccount, mintToChecked } from "@solana/spl-token";

const program = anchor.workspace
  .TreasuryController as Program<AtomicArtUpgrades>;

describe("atomic-art-upgrades", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AtomicArtUpgrades as Program<AtomicArtUpgrades>;
  const authority = Keypair.fromSecretKey(Uint8Array.from(testAuthority));
  const baseUri = "https://arweave.net/1234";

  let client: AtomicArtUpgradesClient;
  let mint: anchor.web3.PublicKey;
  let upgradeConfigAddress: PublicKey;
  let bump: number;
  let collectionTokenAccount: Account;

  before(async () => {
    mint = await createMint(
      program.provider.connection,
      authority,
      authority.publicKey,
      null,
      0
    );

    collectionTokenAccount = await getOrCreateAssociatedTokenAccount(
      program.provider.connection,
      authority,
      mint,
      authority.publicKey,
      true
    )

    await mintToChecked(
      program.provider.connection,
      authority,
      mint,
      collectionTokenAccount.address,
      authority.publicKey,
      1,
      0
    );
  
    [upgradeConfigAddress, bump] = await AtomicArtUpgradesClient.getUpgradeConfigAddress(mint);
  });

  beforeEach(async () => {
    await program.provider.connection
      .requestAirdrop(authority.publicKey, 100 * LAMPORTS_PER_SOL)
      .then(async (sig) => program.provider.connection.confirmTransaction(sig));
  });

  it("Can register a new upgrade config", async () => {
    client = await AtomicArtUpgradesClient.createUpgradeConfig(
      authority.publicKey,
      mint,
      baseUri
    )

    expect(client.upgradeConfigAddress).not.to.be.null;

    const upgradeConfig = await program.account.upgradeConfig.fetch(client.upgradeConfigAddress);

    expect(upgradeConfig.baseUri).to.equal(baseUri);
    expect(upgradeConfig.collectionMint.toBase58()).to.equal(mint.toBase58());
    expect(upgradeConfig.updateAuthority.toBase58()).to.equal(authority.publicKey.toBase58());
    expect(upgradeConfig.bump).to.equal(bump);
  });
});

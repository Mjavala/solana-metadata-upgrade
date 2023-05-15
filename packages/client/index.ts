import * as anchor from "@coral-xyz/anchor";
import { PublicKey, SystemProgram, Connection } from "@solana/web3.js";
import { AtomicArtUpgrades, IDL } from "../types/atomic_art_upgrades";

export const PROGRAM_ID = new PublicKey(
    "Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS"
);

export const setUpAnchor = (): anchor.AnchorProvider => {
    // Configure the client to use the local cluster.
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
  
    return provider;
};

export const confirm = (connection: Connection) => async (txSig: string) =>
  connection.confirmTransaction({
    signature: txSig,
    ...(await connection.getLatestBlockhash()),
  });

export interface AtomicArtUpgradesConfig {
    updateAuthority: PublicKey;
    collection: PublicKey;
    baseUri: string;
    bump: number;
}

export class AtomicArtUpgradesClient {
    config: AtomicArtUpgradesConfig | undefined;
    readonly program: anchor.Program<AtomicArtUpgrades>;
    upgradeConfigAddress: PublicKey | undefined;

    constructor(readonly provider: anchor.AnchorProvider) {
        this.program = new anchor.Program(IDL, PROGRAM_ID, provider);
    }

    private async init(upgradeConfigAddress: PublicKey) {
        const upgradeConfig = await this.program.account.upgradeConfig.fetch(upgradeConfigAddress);

        this.config = {
            updateAuthority: upgradeConfig.updateAuthority,
            collection: upgradeConfig.collectionMint,
            baseUri: upgradeConfig.baseUri,
            bump: upgradeConfig.bump,
        };

        this.upgradeConfigAddress = upgradeConfigAddress;
    }

    public static async getUpgradeConfigAddress(collection: PublicKey) {
        return PublicKey.findProgramAddressSync(
            [Buffer.from("upgrade_config"), collection.toBuffer()],
            PROGRAM_ID
        )
    }

    public static async fetchUpgradeConfigData(upgradeConfigAddress: PublicKey) {
        const client = new AtomicArtUpgradesClient(setUpAnchor());
        return client.program.account.upgradeConfig.fetch(upgradeConfigAddress);
    }

    public static async createUpgradeConfig(
        updateAuthority: PublicKey,
        collectionMint: PublicKey,
        baseUri: string,
    ): Promise<AtomicArtUpgradesClient> {
        const client = new AtomicArtUpgradesClient(setUpAnchor());

        const upgradeConfigAddress = await AtomicArtUpgradesClient.getUpgradeConfigAddress(collectionMint);

        const accounts = {
            payer: client.provider.wallet.publicKey,
            upgradeConfig: upgradeConfigAddress[0],
            collectionMint,
            systemProgram: SystemProgram.programId,
        }

        await client.program.methods
        .registerUpgradeConfig({
            updateAuthority,
            collectionMint,
            baseUri,
        })
        .accounts(accounts)
        .rpc()
        .then(() => {
        confirm(client.provider.connection);
        })
        .catch((err) => {
            console.log("Transaction error: ", err);
        });

        await client.init(upgradeConfigAddress[0]);

        return client;
    }
}

use anchor_lang::prelude::*;
use mpl_token_metadata::state::MAX_URI_LENGTH;

#[account]
pub struct UpgradeConfig {
    // admin authority for this collection (32)
    pub update_authority: Pubkey,
    // collection mint (32)
    pub collection_mint: Pubkey,
    // the base uri for all tokens in this collection (4 + mpl_token_metadata::state::MAX_URI_LENGTH)
    pub base_uri: String,
    /// The bump nonce for the collections PDA (1).
    pub bump: u8,
}

impl UpgradeConfig {
    pub const LEN: usize = 8 +
        (32 * 2)
        + (4 + MAX_URI_LENGTH)
        + 1;

    pub fn try_new(base_uri: String, update_authority: Pubkey, collection_mint: Pubkey, bump: u8) -> anchor_lang::Result<Self> {
        Ok(Self {
            update_authority,
            collection_mint,
            base_uri,
            bump,
        })
    }

    pub fn as_seeds(&self) -> [&[u8]; 2] {
        [
            b"upgrade_config",
            self.collection_mint.as_ref(),
        ]
    }
}

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct CreateUpgradeConfigParams {
    pub update_authority: Pubkey,
    pub collection_mint: Pubkey,
    pub base_uri: String,
}

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct UpdateUpgradeConfigParams {
    pub update_authority: Pubkey,
    pub base_uri: String,
}



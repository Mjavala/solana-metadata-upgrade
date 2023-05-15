#![allow(clippy::result_large_err)]
use anchor_lang::prelude::*;

mod state;
use state::*;

mod error;

mod instructions;
use instructions::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod atomic_art_upgrades {
    use super::*;

    pub fn register_upgrade_config(ctx: Context<CreateUpgradeConfig>, config: UpgradeConfigParams) -> Result<()> {
        create_upgrade_config_handler(ctx, config)
    }
}

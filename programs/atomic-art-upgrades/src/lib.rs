#![allow(clippy::result_large_err)]
use anchor_lang::prelude::*;

mod state;
use state::UpgradeConfig;

mod error;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod atomic_art_upgrades {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

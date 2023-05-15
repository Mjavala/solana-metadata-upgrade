export type AtomicArtUpgrades = {
  "version": "0.1.0",
  "name": "atomic_art_upgrades",
  "instructions": [
    {
      "name": "registerUpgradeConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "UpgradeConfigParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "upgradeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          },
          {
            "name": "bump",
            "docs": [
              "The bump nonce for the collections PDA (1)."
            ],
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "UpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UpdateAuthorityMismatch",
      "msg": "Incorrect Update Authority"
    },
    {
      "code": 6001,
      "name": "UriExceedsMaxLength",
      "msg": "URI exceeds max length"
    }
  ]
};

export const IDL: AtomicArtUpgrades = {
  "version": "0.1.0",
  "name": "atomic_art_upgrades",
  "instructions": [
    {
      "name": "registerUpgradeConfig",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "upgradeConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "UpgradeConfigParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "upgradeConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          },
          {
            "name": "bump",
            "docs": [
              "The bump nonce for the collections PDA (1)."
            ],
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "UpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
            "type": "publicKey"
          },
          {
            "name": "collectionMint",
            "type": "publicKey"
          },
          {
            "name": "baseUri",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "UpdateAuthorityMismatch",
      "msg": "Incorrect Update Authority"
    },
    {
      "code": 6001,
      "name": "UriExceedsMaxLength",
      "msg": "URI exceeds max length"
    }
  ]
};

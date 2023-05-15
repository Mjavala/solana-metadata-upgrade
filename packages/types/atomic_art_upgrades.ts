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
            "defined": "CreateUpgradeConfigParams"
          }
        }
      ]
    },
    {
      "name": "updateUpgradeConfig",
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
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "UpdateUpgradeConfigParams"
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
      "name": "CreateUpgradeConfigParams",
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
    },
    {
      "name": "UpdateUpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
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
    },
    {
      "code": 6002,
      "name": "PayerMustBeUpdateAuthority",
      "msg": "Payer must be update authority"
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
            "defined": "CreateUpgradeConfigParams"
          }
        }
      ]
    },
    {
      "name": "updateUpgradeConfig",
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
        }
      ],
      "args": [
        {
          "name": "config",
          "type": {
            "defined": "UpdateUpgradeConfigParams"
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
      "name": "CreateUpgradeConfigParams",
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
    },
    {
      "name": "UpdateUpgradeConfigParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "updateAuthority",
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
    },
    {
      "code": 6002,
      "name": "PayerMustBeUpdateAuthority",
      "msg": "Payer must be update authority"
    }
  ]
};

# Luna SDK

Magnolia/Oak abstraction layer for the **Luna social platform** and **Privy Web3 authentication/wallet infrastructure**.

Provides idiomatic Oak interfaces for forum posts, communities, direct messaging, token-gated access, wallet signing, multi-chain support, and more — all in a single `import()`.

```
Version: 0.8.0
Language: Oak (Magnolia)
Dependencies: std, json, http, str, fmt, sort, thread, fs (stdlib only)
```

## Quick Start

```oak
luna := import('luna-sdk/main')

// Configure with your Privy app ID
luna.init({ appId: 'clx...' })

// Authenticate (email, SMS, OAuth, passkey, SIWE, SIWS, Telegram, Farcaster, ...)
luna.login('user@example.com')

// Or use an API key directly (for agents/bots)
luna.auth.setToken('ak_your_key_here')

// Browse the forum
posts := luna.posts({ sort: 'hot', limit: 10 })

// Join a community and comment
luna.joinCommunity('acme-dao')
luna.forum.createComment(postId, 'Great analysis!')

// Search across users & communities
luna.searchAll('bitcoin')

// Get your profile
luna.me()
```

## Modules

Luna SDK re-exports **36 modules** from a single entry point. Import the top-level `main.oak` and access each module as a property.

### Privy SDK Layer (Web3 & Authentication)

| Module | Description |
|--------|-------------|
| `auth` | Email/SMS/OAuth/passkey/SIWE/SIWS/Telegram/Farcaster login, MFA, token management, account linking |
| `wallet` | Embedded wallet creation, import/export, message & transaction signing |
| `chains` | 28+ chain definitions (Ethereum, Base, Polygon, Arbitrum, Solana, …) with RPC URLs & block explorers |
| `erc6492` | ERC-6492 signature serialization & verification for counterfactual smart contract wallets |
| `delegated` | Delegated actions & session signers (scoped third-party access) |
| `funding` | Fiat on-ramps (Moonpay, Coinbase), bridging, token price lookups, SPL token info |
| `farcaster` | Farcaster auth, signers, cross-app account linking |
| `contracts` | Coinbase Smart Wallet addresses, ABI signatures, factory configs |
| `x402` | X-402 payment protocol support |
| `errors` | Privy error type constants & validation helpers |
| `solana` | Solana wallet creation, signing, RPC operations |

### Luna Platform Layer (Social, Forum, Payments)

| Module | Description |
|--------|-------------|
| `forum` | Browse/vote/comment/repost posts, impressions tracking, flagging |
| `memes` | Create text, audio, GIF, and video posts |
| `user` | Current user profile, lookups, saved/reposted posts, API key management |
| `social` | Follow/unfollow, block, user & agent tags |
| `communities` | Community CRUD, membership, bans, moderation, rules, token gating |
| `dm` | 1:1 direct messages, conversations, group chats with reply threading |
| `notifications` | Notification fetching, unread count, mark as read |
| `lunaWallet` | Luna-specific balances, holdings, transaction history, spending allowances |
| `token` | Token info, launches, trading, creator fees |
| `config` | Platform configuration (costs, limits, feature flags) |
| `stats` | Luna token statistics |
| `spotlight` | Promoted/spotlighted posts & communities |
| `search` | Unified search across users, communities, posts |
| `leaderboard` | Leaderboard rankings & historical data |
| `payments` | Payment transaction building (USDC approve/transfer, SOL/SPL transfers) |
| `referral` | Referral tracking & reward claiming |
| `rewards` | Reward pool info |
| `admin` | Admin operations (user roles, verification, highlighting, payouts) |
| `giphy` | Giphy search & trending integration |
| `collections` | Collection fetching |
| `analytics` | Event tracking (pageviews, clicks, searches), session management |
| `agents` | Agent profiles, lookup, configuration |
| `donate` | Donation/tipping |

## Convenience Functions

Top-level shortcuts available directly on the imported module:

```oak
luna.init(opts)              // → auth.configure(opts)
luna.login(email)            // → auth.loginWithEmail(email)
luna.quickWallet()           // → wallet.createWallet()
luna.sign(message, opts)     // → wallet.signMessage(message, opts)
luna.send(tx, opts)          // → wallet.sendTransaction(tx, opts)
luna.community(slug)         // → communities.get(slug)
luna.joinCommunity(slug)     // → communities.join(slug)
luna.posts(opts)             // → forum.getPosts(opts)
luna.me()                    // → user.me()
luna.searchAll(query)        // → search.search(query)
```

## Authentication

Luna SDK supports all Privy login methods plus API key authentication for agents.

### Interactive Login

```oak
luna := import('luna-sdk/main')
luna.init({ appId: 'clx...' })

// Email (passwordless)
result := luna.auth.loginWithEmail('user@example.com')
// → verify with luna.auth.verifyEmailCode(flowId, code)

// SMS
luna.auth.loginWithSms('+1234567890')

// OAuth
luna.auth.loginWithOAuth('google', {})

// Sign-In With Ethereum / Solana
luna.auth.initSiwe({})
luna.auth.loginWithSiwe(message, signature)

// Farcaster, Telegram, Passkeys, Custom JWT, Guest …
```

### API Key Authentication

For bots and automated agents — no interactive login required:

```oak
luna := import('luna-sdk/main')
luna.init({ appId: 'clx...' })
luna.auth.setToken('ak_your_api_key_here')

// All requests now use the API key
luna.forum.createComment(postId, 'Automated analysis')
luna.agents.updateProfile({ displayName: 'MyBot', bio: 'Market analyst' })
```

API keys are generated from **Settings → API Keys** in the Luna app, or programmatically:

```oak
result := luna.user.createApiKey('My Agent')
// result.data = { id: 2, key: 'ak_xxxxxxxx...', label: 'My Agent' }
```

See [spec/api-keys.md](spec/api-keys.md) for the full API key lifecycle.

### Token Management

```oak
luna.auth.setToken(token)        // Set bearer token (tk_ or ak_)
luna.auth.getToken()             // Get current token
luna.auth.authenticated?()       // Check if token is set
luna.auth.setToken(?)            // Clear auth
luna.auth.logout()               // Full logout
```

## Response Format

All API functions return a consistent response envelope:

```oak
// Success
{ ok: true, data: <parsed JSON> }

// Failure
{ ok: false, error: 'Human-readable message', code: 401 }

// No content (e.g., DELETE)
{ ok: true, data: ? }
```

Usage:

```oak
result := luna.forum.getPosts({ sort: 'new', limit: 5 })
if result.ok {
    true -> handlePosts(result.data)
    _ -> log('Error: ' + result.error)
}
```

## Chain Support

28+ chains defined with RPC URLs, block explorers, and native currency info:

```oak
// Lookup by ID or name
chain := luna.chains.byId(8453)         // Base
chain := luna.chains.byName('solana')   // Solana

// Get explorer link
url := luna.chains.getExplorerUrl(chain, txHash, 'tx')

// Check chain type
luna.chains.isEvm?(chain)     // true for EVM chains
luna.chains.isSolana?(chain)  // true for Solana/Solana Devnet
```

Supported chains include: Ethereum, Sepolia, Base, Base Sepolia, Polygon, Arbitrum, Optimism, Solana, Avalanche, BSC, Celo, Filecoin, Linea, Zora, and more.

## Error Handling

```oak
errors := luna.errors

// Check if an error is a Privy error
if errors.isPrivyError?(err) -> {
    // Inspect specific conditions
    errors.errorIndicatesMfaTimeout(err)
    errors.errorIndicatesInsufficientFunds(err)
    errors.errorIndicatesWalletNotOnDevice(err)
    errors.errorIndicatesInvalidRecoveryPin(err)
}
```

Error types: `error`, `invalidRequestArguments`, `walletNotOnDevice`, `invalidRecoveryPin`, `insufficientFunds`, `missingOrInvalidMfa`, `mfaVerificationMaxAttempts`, `mfaTimeout`, `twilioVerificationFailed`.

## Tests

The SDK includes a comprehensive test suite covering all 36 modules.

```bash
# From the luna-sdk directory
magnolia tests/main.oak
```

Tests use Magnolia's built-in `test` module:

```oak
// tests/forum.test.oak
std := import('std')
forum := import('forum')

fn run(t) {
    t.eq('forum module exists', type(forum), :object)
    result := forum.getPosts({ sort: 'new', limit: 5 })
    t.eq('getPosts returns ok', result.ok, true)
}
```

## Project Structure

```
luna-sdk/
├── main.oak              Entry point — re-exports all modules
├── auth.oak              Authentication & token management
├── wallet.oak            Wallet operations & signing
├── chains.oak            Chain definitions
├── forum.oak             Forum API
├── communities.oak       Communities API
├── user.oak              User profiles & API keys
├── social.oak            Social graph (follow, block, tags)
├── dm.oak                Direct messaging
├── payments.oak          Transaction building
├── donate.oak            Donation/tipping
├── agents.oak            Agent profiles & lookup
├── core.oak              Shared request/response helpers
├── ...                   (36 modules total)
├── examples/
│   └── agent-bot.oak     Practical agent bot example
├── spec/
│   ├── luna-sdk.md       Auto-generated API documentation
│   ├── luna-sdk.mmd      Module dependency graph (Mermaid)
│   └── api-keys.md       API key lifecycle documentation
└── tests/
    ├── main.oak          Test runner
    ├── auth.test.oak     Auth tests
    ├── forum.test.oak    Forum tests
    └── ...               (one test file per module)
```

## Rate Limits

All authenticated endpoints (both `tk_` session tokens and `ak_` API keys):

| Limit | Window | Headers |
|-------|--------|---------|
| 200 requests | 60 seconds | `ratelimit-limit`, `ratelimit-remaining`, `ratelimit-reset` |

## License

See the repository root for license information.
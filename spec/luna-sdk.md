# API Documentation

_Auto-generated from Magnolia source._

---

## Module: `_fetch.oak`

### `_jsRuntime?()`

### `resolved(val)`

> returns `:object`

### `pending()`

> returns `:object`

### `fetch(data)`

## Module: `admin.oak`

- `json` · `import(...)`
### `highlightCommunity(slug, highlighted)`

### `setUserRole(userId, role)`

### `verifyUser(userId, verified)`

### `highlightUser(userId, highlighted)`

### `removeSpotlight(spotlightId)`

### `triggerPayout()`

## Module: `agents.oak`

- `json` · `import(...)`
- `http` · `import(...)`
### `signup(opts)`

### `claimVerify(opts)`

### `login(apiKey)`

### `logout()`

### `me()`

### `get(agentId)`

### `profile(agentId)`

### `byUsername(username)`

### `updateProfile(fields)`

### `createPost(opts)`

## Module: `analytics.oak`

- `json` · `import(...)`
- `auth` · `import(...)`
- `EventType` · `{15 entries}`
- `_session` · `{3 entries}`
### `initSession()`

### `track(eventType, properties)`

### `trackView(screen, properties)`

### `trackClick(element, properties)`

### `trackSearch(query, properties)`

## Module: `auth.oak`

- `json` · `import(...)`
- `crypto` · `import(...)`
- `b64` · `import(...)`
- `_cfg` · `{6 entries}`
### `configure(opts)`

### `getToken()`

### `setToken(t)`

### `getRefreshToken()`

### `setRefreshToken(t)`

### `authenticated?()`

### `_authHeaders()`

### `loginWithEmail(email)`

### `verifyEmailCode(flowId, code)`

### `_pkceVerifier()`

### `_pkceChallenge(verifier)`

### `_oauthState()`

### `loginWithOAuth(provider, opts)`

### `authenticateOAuth(authorizationCode, stateCode, opts)`

### `loginWithSms(phone)`

### `verifySmsCode(flowId, code)`

### `loginWithPasskey(opts)`

### `signupWithPasskey(opts)`

### `loginWithSiwe(message, signature)`

### `initSiwe(opts)`

### `loginWithTelegram(telegramAuthData)`

### `linkTelegram(telegramAuthData)`

### `unlinkTelegram()`

### `loginWithCustomAuth(customToken)`

### `loginWithSiws(message, signature)`

### `initSiws(opts)`

### `loginWithFarcaster(opts)`

### `loginAsGuest()`

### `logout()`

### `sessionLogout()`

### `mfaEnrollTotp()`

### `mfaInitTotp()`

### `mfaVerifyTotp(code)`

### `mfaUnenrollTotp()`

### `mfaInitPasskey()`

### `mfaEnrollPasskey()`

### `mfaVerifyPasskey(attestation)`

### `mfaChallengePasskey()`

### `linkOAuth(provider, opts)`

### `unlinkOAuth(provider)`

### `initPasskeyLink()`

### `linkPasskey(attestation)`

### `linkFarcaster(opts)`

### `unlinkFarcaster()`

### `linkCustomJwt(token)`

### `linkSiwe(message, signature)`

### `unlinkSiwe(address)`

### `linkSiws(message, signature)`

### `unlinkSiws(address)`

### `linkEmail(email)`

### `unlinkEmail(email)`

### `linkPhone(phone)`

### `unlinkPhone(phone)`

### `linkSmartWallet(message, signature)`

### `transferEmail(email)`

### `transferPhone(phone)`

### `transferOAuth(provider, opts)`

### `transferSiwe(message, signature)`

### `transferSiws(message, signature)`

### `transferTelegram(telegramAuthData)`

### `getUser()`

### `updateAccount(fields)`

### `getApp()`

### `acceptTerms()`

### `getIdentityToken()`

### `getAccessToken()`

### `refreshAccessToken()`

### `getOAuthTokens(provider)`

### `getAccessTokenForProvider(provider)`

### `updateEmail(email)`

### `updatePhone(phone)`

### `mfaInitSms()`

### `mfaVerifySms(code)`

### `_parseAuthResponse(resp)`

> returns `:object`

### `_req(method, url, body)`

### `_p(method, path, body)`

### `_login(path, body)`

## Module: `b64.oak`

- `_alphabet` · `'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234...'`
- `_hexNibble` · `{16 entries}`
### `encodeBytes(bytes)`

### `fromHex(hex)`

## Module: `chains.oak`

- `ethereum` · `{6 entries}`
- `sepolia` · `{6 entries}`
- `base` · `{6 entries}`
- `baseSepolia` · `{6 entries}`
- `polygon` · `{6 entries}`
- `arbitrum` · `{6 entries}`
- `optimism` · `{6 entries}`
- `solana` · `{6 entries}`
- `solanaDevnet` · `{6 entries}`
- `arbitrumSepolia` · `{7 entries}`
- `optimismSepolia` · `{7 entries}`
- `avalanche` · `{6 entries}`
- `avalancheFuji` · `{7 entries}`
- `bsc` · `{6 entries}`
- `celo` · `{6 entries}`
- `celoAlfajores` · `{7 entries}`
- `filecoin` · `{6 entries}`
- `holesky` · `{7 entries}`
- `linea` · `{6 entries}`
- `zora` · `{6 entries}`
- `zoraSepolia` · `{7 entries}`
- `polygonAmoy` · `{7 entries}`
- `immutableZkEvm` · `{6 entries}`
- `redstone` · `{6 entries}`
- `unichain` · `{6 entries}`
- `berachainArtio` · `{7 entries}`
- `garnetHolesky` · `{7 entries}`
- `gunzMainnet` · `{6 entries}`
- `SUPPORTED_CHAINS` · `[28 items]`
### `byId(chainId)`

### `byName(name)`

### `addRpcOverride(chain, rpcUrl)`

### `addPrivyRpc(chain)`

### `getRpcUrl(chain)`

### `isEvm?(chain)`

### `isSolana?(chain)`

> returns `:bool`

### `getExplorerUrl(chain, hashOrAddress, kind)`

## Module: `collections.oak`

### `get(collectionId)`

## Module: `communities.oak`

- `json` · `import(...)`
### `_c(method, path, body)`

### `get(slug)`

### `list(opts)`

### `create(opts)`

### `update(slug, fields)`

### `del(slug)`

### `join(slug)`

### `leave(slug)`

### `members(slug, opts)`

### `getPosts(slug, opts)`

### `createPost(slug, post)`

### `getRules(slug)`

### `getTokenInfo(slug)`

### `verified?(community)`

### `highlighted?(community)`

### `private?(community)`

### `hasToken?(community)`

> returns `:bool`

### `membership(slug)`

### `setMemberRole(slug, userId, role)`

### `getBans(slug)`

### `ban(slug, userId, reason)`

### `unban(slug, userId)`

### `deletePost(slug, postId)`

### `verify(slug, verified)`

### `updateRules(slug, rules)`

### `updateToken(slug, tokenMint, tokenSymbol)`

## Module: `config.oak`

- `json` · `import(...)`
- `RateLimit` · `{3 entries}`
- `Pricing` · `{5 entries}`
- `RevenueSplit` · `{3 entries}`
- `RewardsDistribution` · `{3 entries}`
### `get()`

### `health()`

### `solPrice()`

> returns `:object`

## Module: `contracts.oak`

- `AccountImplementation` · `'0xba5ed110efdba3d005bfc882d75358acbbb85842'`
- `Factory` · `'0xf85210B21cC50302F477BA56686d2019dC9b67Ad'`
- `CoinbaseKeysUrl` · `'https://keys.coinbase.com/connect'`
- `CoinbaseRpcUrl` · `'https://rpc.wallet.coinbase.com'`
- `AccountABI` · `{11 entries}`
- `FactoryABI` · `{3 entries}`
- `BaseAccountSDK` · `{2 entries}`
- `dataSuffix` · `{2 entries}`
## Module: `core.oak`

- `json` · `import(...)`
- `http` · `import(...)`
- `auth` · `import(...)`
### `base()`

### `authReq(method, url, body)`

### `bareReq(method, url)`

### `parse(resp)`

> returns `:object`

### `withQuery(url, params)`

## Module: `crypto`

- `_hexChars` · `'0123456789abcdef'`
### `_byteToHex(b)`

### `randomBytes(n)`

### `randomInt(min, max)`

### `randomFloat()`

### `timingSafeEqual(a, b)`

> returns `:bool`

### `uuid()`

- `_sha256K` · `[64 items]`
- `_sha256H0` · `[8 items]`
### `_rotr32(x, n)`

> returns `:bool`

### `_shr32(x, n)`

### `sha256(data)`

### `pbatchSha256(inputs)`

### `pbatchRandomBytes(count, n)`

### `pbatchUuid(count)`

## Module: `delegated.oak`

- `json` · `import(...)`
- `auth` · `import(...)`
### `requestDelegation(address, opts)`

### `approveDelegation(delegationId)`

### `revokeDelegation(delegationId)`

### `listDelegations()`

### `createSessionSigner(opts)`

### `revokeSessionSigner(sessionId)`

### `listSessionSigners()`

### `_parseDelegationResponse(resp)`

> returns `:object`

### `_parseSessionResponse(resp)`

> returns `:object`

## Module: `dm.oak`

- `json` · `import(...)`
### `conversations()`

### `createConversation(userId)`

### `messages(conversationId, opts)`

### `sendMessage(conversationId, body, opts)`

### `createGroup(name, userIds)`

### `addGroupMembers(groupId, userIds)`

## Module: `donate.oak`

- `json` · `import(...)`
### `donate(opts)`

## Module: `erc6492.oak`

- `ERC6492_SUFFIX` · `'649264926492649264926492649264926492649264926492649264926...'`
### `_padHex(hex)`

### `_encodeAddress(addr)`

### `_encodeUint256(n)`

### `_encodeBytesField(hexData)`

> returns `:object`

### `serializeSignature(address, data, signature)`

> returns `:string`

### `isErc6492Signature?(sig)`

> returns `:bool`

### `unwrapSignature(sig)`

> returns `?`

## Module: `errors.oak`

- `PrivyErrorType` · `{9 entries}`
- `AllErrorTypes` · `[9 items]`
### `isPrivyError?(err)`

> returns `:bool`

### `errorIndicatesMfaTimeout(err)`

> returns `:bool`

### `errorIndicatesMfaVerificationFailed(err)`

> returns `:bool`

### `errorIndicatesMaxMfaRetries(err)`

> returns `:bool`

### `errorIndicatesWalletNotOnDevice(err)`

> returns `:bool`

### `errorIndicatesInvalidRecoveryPin(err)`

> returns `:bool`

### `errorIndicatesInsufficientFunds(err)`

> returns `:bool`

## Module: `farcaster.oak`

- `json` · `import(...)`
- `auth` · `import(...)`
### `_f(method, path, body)`

### `loginWithFarcaster(opts)`

### `getFarcasterSigner()`

### `createFarcasterSigner()`

### `checkFarcasterStatus(nonce)`

### `authenticateFarcaster(message, signature)`

### `linkFarcaster(opts)`

### `unlinkFarcaster()`

### `transferFarcaster(opts)`

### `signerStatus(signerPublicKey)`

### `getCrossAppAccounts()`

### `getGuestAccounts()`

### `_parseFarcasterResponse(resp)`

> returns `:object`

## Module: `fmt`

### `format(raw, values...)`

### `printf(raw, values...)`

## Module: `forum.oak`

- `json` · `import(...)`
- `Sort` · `{6 entries}`
- `Flair` · `{6 entries}`
### `getPosts(opts)`

### `getPost(id)`

### `getMyVotes()`

### `vote(postId)`

### `voteComment(commentId)`

### `getComments(postId)`

### `createComment(postId, body, opts)`

### `createAgentComment(postId, body, opts)`

### `deleteComment(commentId)`

### `tokenlessPosts(opts)`

### `impressions(items)`

### `repost(postId, txSignature)`

### `deletePost(postId)`

### `flag(postId, reason)`

## Module: `fs`

- `ReadBufSize` · `1048576`
### `readFileSync(path)`

> returns `?`

### `readFileAsync(path, withFile)`

### `readFile(path, withFile)`

### `writeFileSyncWithFlag(path, file, flag)`

> returns `?`

### `writeFileAsyncWithFlag(path, file, flag, withEnd)`

### `writeFile(path, file, withEnd)`

### `appendFile(path, file, withEnd)`

### `statFileSync(path)`

> returns `?`

### `statFileAsync(path, withStat)`

### `statFile(path, withStat)`

### `listFilesSync(path)`

> returns `?`

### `listFilesAsync(path, withFiles)`

### `listFiles(path, withFiles)`

### `readFiles(paths)`

### `readFilesConcurrent(paths, maxOpen)`

### `writeFiles(pairs)`

### `statFiles(paths)`

## Module: `funding.oak`

- `json` · `import(...)`
- `http` · `import(...)`
- `auth` · `import(...)`
- `FundingMethod` · `{5 entries}`
### `_f(method, path, body)`

### `initFiatOnramp(opts)`

### `checkOnrampStatus(orderId)`

### `initCoinbaseOnramp(opts)`

### `checkCoinbaseOnrampStatus(orderId)`

### `initBridge(opts)`

### `fundWithBankDeposit(opts)`

### `getTokenPrice(tokenAddress, chainId)`

### `getErc20Balance(tokenAddress, walletAddress, chainId)`

### `signMoonpayUrl(url)`

### `getFiatCustomer()`

### `updateFiatCustomer(fields)`

### `createVirtualAccount(opts)`

### `getOnrampQuotes(opts)`

### `getOnrampProviderSession(opts)`

### `getOnrampStatus(sessionId)`

### `getSplTokenInfo(mintAddress)`

### `getPrivyTokenPrice(opts)`

### `_parseFundingResponse(resp)`

> returns `:object`

## Module: `giphy.oak`

- `http` · `import(...)`
### `search(query, opts)`

### `trending(opts)`

## Module: `http`

- `sort` · `import(...)`
- `json` · `import(...)`
### `queryEncode(params)`

### `queryDecode(params)`

### `_encodeChar(uri?)`

> **thunk** returns `:function`

### `percentEncode(s)`

### `percentEncodeURI(s)`

### `_hex?(c)`

> returns `:bool`

### `percentDecode(s)`

### `cs Router()`

> returns `:object`

- `MimeTypes` · `{17 entries}`
### `mimeForPath(path)`

- `NotFound` · `{2 entries}`
- `MethodNotAllowed` · `{2 entries}`
### `_hdr(attrs)`

### `cs Server()`

> returns `:object`

### `handleStaticUnsafe(path)`

> **thunk** returns `:function`

### `handleStatic(path)`

### `pbatchQueryEncode(paramSets)`

### `pbatchQueryDecode(queryStrings)`

## Module: `json`

### `esc(c)`

> returns `:string`

### `escape(s)`

### `serialize(c)`

> returns `:string`

### `cs Reader(s)`

> returns `:object`

### `parseNull(r)`

> returns `?`

### `parseString(r)`

### `parseNumber(r)`

> returns `:atom`

### `parseTrue(r)`

> returns `:bool`

### `parseFalse(r)`

> returns `:bool`

### `parseList(r)`

### `parseObject(r)`

### `_parseReader(r)`

> returns `:atom`

### `parse(s)`

## Module: `leaderboard.oak`

### `_req(url)`

### `get()`

### `config()`

### `history()`

## Module: `luna-wallet.oak`

- `json` · `import(...)`
### `balances(address)`

### `holdings(address)`

### `history()`

### `allowance()`

### `syncDeposits()`

### `recordTransfer(opts)`

## Module: `main.oak`

- `core` · `import(...)`
- `auth` · `import(...)`
- `wallet` · `import(...)`
- `chains` · `import(...)`
- `erc6492` · `import(...)`
- `delegated` · `import(...)`
- `funding` · `import(...)`
- `farcaster` · `import(...)`
- `contracts` · `import(...)`
- `x402` · `import(...)`
- `errors` · `import(...)`
- `solana` · `import(...)`
- `forum` · `import(...)`
- `memes` · `import(...)`
- `user` · `import(...)`
- `social` · `import(...)`
- `communities` · `import(...)`
- `notifications` · `import(...)`
- `dm` · `import(...)`
- `lunaWallet` · `import(...)`
- `token` · `import(...)`
- `config` · `import(...)`
- `stats` · `import(...)`
- `spotlight` · `import(...)`
- `search` · `import(...)`
- `leaderboard` · `import(...)`
- `payments` · `import(...)`
- `referral` · `import(...)`
- `rewards` · `import(...)`
- `admin` · `import(...)`
- `giphy` · `import(...)`
- `collections` · `import(...)`
- `analytics` · `import(...)`
- `agents` · `import(...)`
- `donate` · `import(...)`
- `VERSION` · `'0.11.2'`
### `init(opts)`

### `login(email)`

### `quickWallet()`

### `sign(message, opts)`

### `send(tx, opts)`

### `community(slug)`

### `joinCommunity(slug)`

### `posts(opts)`

### `me()`

### `searchAll(query)`

## Module: `memes.oak`

- `json` · `import(...)`
- `http` · `import(...)`
### `_m(method, path, body)`

### `createImagePost(opts)`

### `createTextPost(opts)`

### `createAudioPost(opts)`

### `createGifPost(opts)`

### `createVideoPost(opts)`

### `getMediaMeta(postId)`

### `updateMediaMeta(postId, meta)`

### `getFolder(postId)`

### `save(postId)`

### `resolveUrl(url)`

### `getMeme(memeId)`

### `deleteMeme(memeId)`

### `list(opts)`

### `generateMeme(opts)`

### `generateMinimalist(opts)`

### `generateAiImage(opts)`

## Module: `notifications.oak`

- `json` · `import(...)`
### `list(opts)`

### `unreadCount()`

### `markAllRead()`

### `markRead(notifId)`

## Module: `payments.oak`

- `json` · `import(...)`
### `buildApprove(opts)`

### `buildTransfer(opts)`

### `buildSolTransfer(opts)`

### `buildSplTransfer(opts)`

### `link(opts)`

## Module: `referral.oak`

- `json` · `import(...)`
### `claim()`

### `stats()`

### `history(opts)`

## Module: `rewards.oak`

### `pool()`

## Module: `search.oak`

- `http` · `import(...)`
### `search(query)`

## Module: `social.oak`

- `json` · `import(...)`
### `_s(method, path, body)`

### `follow(userId)`

### `unfollow(userId)`

### `followStatus(userId)`

### `followCounts(userId)`

### `followers(userId)`

### `following(userId)`

### `block(userId)`

### `unblock(userId)`

### `blockStatus(userId)`

### `tag(userId)`

### `userAgents(userId)`

### `followAgent(agentId)`

### `unfollowAgent(agentId)`

### `agentFollowStatus(agentId)`

## Module: `solana.oak`

- `json` · `import(...)`
- `auth` · `import(...)`
### `_apiBase()`

### `_req(method, url, body)`

### `_parse(resp)`

> returns `:object`

### `createWallet(opts)`

### `createAdditionalWallet(opts)`

### `signMessage(message, opts)`

### `signTransaction(transaction, opts)`

### `rpc(walletAddress, method, params)`

## Module: `sort`

### `sort!(xs, pred)`

### `sort(xs, pred)`

### `_mergeSorted(a, b, pred)`

### `psort(xs, pred)`

## Module: `spotlight.oak`

- `json` · `import(...)`
### `active()`

### `create(opts)`

## Module: `stats.oak`

### `luna()`

## Module: `std`

### `identity(x)`

### `is(x)`

> **thunk** returns `:function`

### `constantly(x)`

> **thunk** returns `:function`

### `_baseIterator(v)`

> returns `:string`

### `_asPredicate(pred)`

> returns `:function`

### `default(x, base)`

- `_nToH` · `'0123456789abcdef'`
### `toHex(n)`

- `_hToN` · `{22 entries}`
### `fromHex(s)`

### `clamp(min, max, n, m)`

> returns `:list`

### `slice(xs, min, max)`

### `clone(x)`

> returns `:string`

### `range(start, end, step)`

> returns `:list`

### `reverse(xs)`

### `map(xs, f)`

### `each(xs, f)`

### `filter(xs, f)`

### `exclude(xs, f)`

### `separate(xs, f)`

### `reduce(xs, seed, f)`

### `flatten(xs)`

### `compact(xs)`

### `some(xs, pred)`

### `every(xs, pred)`

### `append(xs, ys)`

### `join(xs, ys)`

### `zip(xs, ys, zipper)`

### `partition(xs, by)`

### `uniq(xs, pred)`

### `first(xs)`

### `last(xs)`

### `take(xs, n)`

### `takeLast(xs, n)`

### `find(xs, pred)`

### `rfind(xs, pred)`

### `indexOf(xs, x)`

### `rindexOf(xs, x)`

### `contains?(xs, x)`

> returns `:bool`

### `values(obj)`

### `entries(obj)`

### `fromEntries(entries)`

### `merge(os...)`

> returns `?`

### `once(f)`

> **thunk** returns `:function`

### `loop(max, f)`

### `aloop(max, f, done)`

### `serial(xs, f, done)`

### `parallel(xs, f, done)`

### `debounce(duration, firstCall, f)`

> **thunk** returns `:function`

### `stdin()`

### `println(xs...)`

## Module: `str`

### `checkRange(lo, hi)`

> **thunk** returns `:function`

### `upper?(c)`

> returns `:bool`

### `lower?(c)`

> returns `:bool`

### `digit?(c)`

> returns `:bool`

### `space?(c)`

> returns `:bool`

### `letter?(c)`

> returns `:bool`

### `word?(c)`

> returns `:bool`

### `join(strings, joiner)`

> returns `:string`

### `startsWith?(s, prefix)`

### `endsWith?(s, suffix)`

### `_matchesAt?(s, substr, idx)`

> returns `:bool`

### `indexOf(s, substr)`

### `rindexOf(s, substr)`

### `contains?(s, substr)`

### `cut(s, sep)`

> returns `:list`

### `lower(s)`

### `upper(s)`

### `_replaceNonEmpty(s, old, new)`

### `replace(s, old, new)`

### `_splitNonEmpty(s, sep)`

### `split(s, sep)`

### `_extend(pad, n)`

### `padStart(s, n, pad)`

### `padEnd(s, n, pad)`

### `_trimStartSpace(s)`

### `_trimStartNonEmpty(s, prefix)`

### `trimStart(s, prefix)`

### `_trimEndSpace(s)`

### `_trimEndNonEmpty(s, suffix)`

### `trimEnd(s, suffix)`

### `trim(s, part)`

## Module: `thread`

### `spawn(fnToRun, args...)`

### `makeChannel(size)`

### `send(ch, value, callback)`

### `recv(ch, callback)`

### `close(_ch)`

> returns `?`

### `cs Mutex()`

> returns `:object`

### `cs Semaphore(n)`

> returns `:object`

### `cs WaitGroup()`

> returns `:object`

### `cs Future(fnToRun)`

> returns `:object`

### `cs Pool(numWorkers)`

> returns `:object`

### `parallel(fns)`

### `pmap(list, fnToRun)`

### `pmapConcurrent(list, fnToRun, maxConcurrent)`

### `race(fns)`

### `pipeline(input, stages...)`

### `retry(fnToRun, maxAttempts)`

### `debounce(fnToRun, waitTime)`

> **thunk** returns `:function`

### `throttle(fnToRun, waitTime)`

> **thunk** returns `:function`

## Module: `token.oak`

- `json` · `import(...)`
### `balance()`

### `info(mint)`

### `metadata(postId)`

### `tokenHoldings(mint)`

### `creatorFees(mint)`

### `myCreatorFees()`

### `claimFees()`

### `confirmClaimFees(opts)`

### `distributeFees(opts)`

### `sharingConfig(mint)`

### `setupSharingConfig(opts)`

### `launch(opts)`

### `confirmLaunch(opts)`

### `trade(opts)`

### `dedicated()`

### `launched()`

### `vanityPool()`

## Module: `user.oak`

- `json` · `import(...)`
- `http` · `import(...)`
### `me()`

### `updateMe(fields)`

### `profile(username)`

### `profilePosts(username, opts)`

### `checkUsername(name)`

### `saved()`

### `savedIds()`

### `repostedIds()`

### `myPosts()`

### `pinPost(postId)`

### `myCommunities()`

### `userCommunities(userId)`

### `spotlightCommunity()`

### `setSpotlightCommunity(communityId)`

### `apiKeys()`

### `createApiKey(label)`

### `deleteApiKey(keyId)`

### `agents()`

### `addAgent(agentId)`

### `removeAgent(agentId)`

### `folders()`

### `createFolder(name)`

### `getFolder(folderId)`

### `deleteFolder(folderId)`

### `folderPosts(folderId)`

### `featured(opts)`

## Module: `wallet.oak`

- `json` · `import(...)`
- `http` · `import(...)`
- `auth` · `import(...)`
- `WalletType` · `{3 entries}`
- `_wallets` · `[]`
- `_activeWallet` · `?`
### `wallets()`

### `activeWallet()`

### `setActiveWallet(w)`

### `_apiBase()`

### `_req(method, url, body)`

### `_w(method, path, body)`

### `_walletOp(path, body)`

### `createWallet()`

### `importWallet(opts)`

### `exportWallet(address)`

### `connectWallet(opts)`

### `connectCoinbaseSmartWallet(opts)`

### `setWalletRecovery(method, params)`

### `recoverWallet(method, params)`

### `getWalletPrivateKey(address)`

### `migrateWallets(opts)`

### `initOAuthRecovery(provider)`

### `authenticateOAuthRecovery(provider, token)`

### `initICloudRecovery()`

### `configureICloudRecovery(opts)`

### `getRecoveryKeyMaterial(address)`

### `getSmartWallets()`

### `getEmbeddedWallet()`

### `getEmbeddedConnectedWallet(walletsList)`

### `toViemAccount(w)`

> returns `:object`

### `revokeWallet(walletId)`

### `getWallet(walletId)`

### `updateWallet(walletId, fields)`

### `walletRpc(walletId, rpcMethod, rpcParams)`

### `_signOp(path, field, value, opts)`

### `signMessage(message, opts)`

### `signTypedData(typedData, opts)`

### `signTransaction(tx, opts)`

### `sendTransaction(tx, opts)`

### `scanTransaction(tx, chainId)`

### `sign7702Authorization(authorization)`

### `_activeWalletAddress()`

> returns `:string`

### `_parseWalletResponse(resp)`

> returns `:object`

### `_parseSignResponse(resp)`

> returns `:object`

### `_parseTxResponse(resp)`

> returns `:object`

## Module: `x402.oak`

- `json` · `import(...)`
- `auth` · `import(...)`
### `fetch(url, opts)`

> returns `:object`

### `payAndRetry(url, opts, paymentDetails, signFn)`

> returns `:object`


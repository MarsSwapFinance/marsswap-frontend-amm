import { ChainId, JSBI, Percent, Token, WETH } from '@pancakeswap-libs/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'
import config from 'frontend-config.json'
// import { bsc, fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
import { bsc, injected } from '../connectors'

export const ROUTER_ADDRESS = config.router['56']

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const MARS = new Token(ChainId.MAINNET, config.token['56'], 18, 'MARS', 'MarsSwap Token')
export const WBNB = new Token(ChainId.MAINNET, '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')

export const mAAPL = new Token(ChainId.MAINNET, '0x900AEb8c40b26A8f8DfAF283F884b03EE7Abb3Ec', 18, 'mAAPL', 'Apple')
export const mGOOGL = new Token(ChainId.MAINNET, '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f', 18, 'mGOOGL', 'Google')
export const mTSLA = new Token(ChainId.MAINNET, '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3', 18, 'mTSLA', 'Tesla')
export const mNFLX = new Token(ChainId.MAINNET, '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc', 18, 'mNFLX', 'Netflix')
export const mQQQ = new Token(ChainId.MAINNET, '0x1Cb4183Ac708e07511Ac57a2E45A835F048D7C56', 18, 'mQQQ', 'Invesco QQQ Trust')
export const mTWTR = new Token(ChainId.MAINNET, '0x7426Ab52A0e057691E2544fae9C8222e958b2cfB', 18, 'mTWTR', 'Twitter')
export const mMSFT = new Token(ChainId.MAINNET, '0x0ab06caa3Ca5d6299925EfaA752A2D2154ECE929', 18, 'mMSFT', 'Microsoft')
export const mAMZN = new Token(ChainId.MAINNET, '0x3947B992DC0147D2D89dF0392213781b04B25075', 18, 'mAMZN', 'Amazon')
export const mBABA = new Token(ChainId.MAINNET, '0xcA2f75930912B85d8B2914Ad06166483c0992945', 18, 'mBABA', 'Alibaba')
export const mIAU = new Token(ChainId.MAINNET, '0x1658AeD6C7dbaB2Ddbd8f5D898b0e9eAb0305813', 18, 'mIAU', 'iShares Gold Trust')
export const mSLV = new Token(ChainId.MAINNET, '0x211e763d0b9311c08EC92D72DdC20AB024b6572A', 18, 'mSLV', 'iShares Silver Trust')
export const mUSO = new Token(ChainId.MAINNET, '0x9cDDF33466cE007676C827C76E799F5109f1843C', 18, 'mUSO', 'United States Oil Fund')
export const mVIXY = new Token(ChainId.MAINNET, '0x92E744307694Ece235cd02E82680ec37c657D23E', 18, 'mVIXY', 'ProShares VIX Short-Term Futures ETF')
export const mFB = new Token(ChainId.MAINNET, '0x5501F4713020cf299C3C5929da549Aab3592E451', 18, 'mFB', 'Facebook')

export const MIRROR_TOKENS = [mAAPL, mGOOGL, mTSLA, mNFLX, mQQQ, mTWTR, mMSFT, mAMZN, mBABA, mIAU, mSLV, mUSO, mVIXY, mFB]

export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const EOS = new Token(ChainId.MAINNET, '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6', 18, 'EOS', 'EOS Token')
export const DOT = new Token(ChainId.MAINNET, '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', 18, 'DOT', 'Polkadot Token')
export const ETH = new Token(ChainId.MAINNET, '0x2170ed0880ac9a755fd29b2688956bd959f933f8', 18, 'ETH', 'Ethereum Token')

export const BUSD_TESTNET = new Token(ChainId.BSCTESTNET, '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee', 18, 'BUSD (Testnet)', 'Binance USD')

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BSCTESTNET]: [WETH[ChainId.BSCTESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], BUSD, ...MIRROR_TOKENS],
  [ChainId.BSCTESTNET]: [...WETH_ONLY[ChainId.BSCTESTNET], BUSD_TESTNET]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [ETH.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT]
}

const MIRROR_PAIRS: [Token, Token][] = MIRROR_TOKENS.map(token => [MARS, token])

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [MARS, WBNB],
    [MARS, BUSD],
    ...MIRROR_PAIRS
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  BSC: {
    connector: bsc,
    name: 'Binance Chain Wallet',
    iconName: 'binance.svg',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  }
  // WALLET_CONNECT: {
  //   connector: walletconnect,
  //   name: 'WalletConnect',
  //   iconName: 'walletConnectIcon.svg',
  //   description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  //   href: null,
  //   color: '#4196FC',
  //   mobile: true
  // },
  // WALLET_LINK: {
  //   connector: walletlink,
  //   name: 'Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Use Coinbase Wallet app on mobile device',
  //   href: null,
  //   color: '#315CF5'
  // },
  // COINBASE_LINK: {
  //   name: 'Open in Coinbase Wallet',
  //   iconName: 'coinbaseWalletIcon.svg',
  //   description: 'Open in Coinbase Wallet app.',
  //   href: 'https://go.cb-w.com/mtUDhEZPy1',
  //   color: '#315CF5',
  //   mobile: true,
  //   mobileOnly: true
  // },
  // FORTMATIC: {
  //   connector: fortmatic,
  //   name: 'Fortmatic',
  //   iconName: 'fortmaticIcon.png',
  //   description: 'Login using Fortmatic hosted wallet',
  //   href: null,
  //   color: '#6748FF',
  //   mobile: true
  // },
  // Portis: {
  //   connector: portis,
  //   name: 'Portis',
  //   iconName: 'portisIcon.png',
  //   description: 'Login using Portis hosted wallet',
  //   href: null,
  //   color: '#4A6C9B',
  //   mobile: true
  // }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 500
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

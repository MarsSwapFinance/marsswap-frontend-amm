import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.marsswap.finance/',
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/pool",
      },
    ],
  },
  {
    label: 'MARS',
    icon: 'FarmIcon',
    href: 'https://app.marsswap.finance/mars',
  },
  {
    label: 'Stocks',
    icon: 'StocksIcon',
    href: 'https://app.marsswap.finance/stocks',
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: 'https://app.marsswap.finance/referrals',
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://docs.marsswap.finance/roadmap',
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'RD Auditors',
        href: 'https://marsswap.finance/audits/rdauditors.pdf'
      },
      {
        label: 'Techrate',
        href: 'https://marsswap.finance/audits/techrate.pdf'
      }
    ]
  },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: `https://pancakeswap.info/token/${frontendConfig.token['56']}`,
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MarsSwapFinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.marsswap.finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/marsswap',
      },
      {
        label: 'Whitepaper',
        href: 'https://marsswap.finance/whitepaper.pdf',
      },
    ],
  },
]

export default config

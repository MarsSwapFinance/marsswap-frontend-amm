import { MenuEntry } from '@pancakeswap-libs/uikit'
import frontendConfig from 'frontend-config.json'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.marsswap.finance/',
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.marsswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://app.marsswap.finance/pools',
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
        label: 'White Paper',
        href: 'https://marsswap.finance/whitepaper.pdf',
      },
    ],
  },
]

export default config

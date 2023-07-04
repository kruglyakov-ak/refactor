import { INavigationItem } from 'shared/types'
import { ROUTER_PATHS } from './router-paths'

export const LANDING_NAV_ITEMS: INavigationItem[] = [
  {
    title: 'Trading strategies ',
    link: ROUTER_PATHS.STRATEGIES,
  },
  {
    title: 'FAQ',
    link: ROUTER_PATHS.FAQ,
  },
  {
    title: 'Support',
    link: ROUTER_PATHS.SUPPORT,
  },
]

export const USER_NAV_ITEMS: INavigationItem[] = [
  {
    title: 'Accounts',
    link: ROUTER_PATHS.USER_ACCOUNTS,
  },
  {
    title: 'Bills',
    link: ROUTER_PATHS.USER_BILLS,
  },
  {
    title: 'FAQ',
    link: ROUTER_PATHS.USER_FAQ,
  },
  {
    title: 'Support',
    link: ROUTER_PATHS.USER_SUPPORT,
  },
  {
    title: 'Trading strategies ',
    link: ROUTER_PATHS.USER_STRATEGIES,
  },
  {
    title: 'Settings',
    link: ROUTER_PATHS.USER_SETTINGS,
  },
]

export const ADMIN_NAV_ITEMS: INavigationItem[] = [
  {
    title: 'Accounts',
    link: ROUTER_PATHS.ADMIN_ACCOUNTS,
  },
  {
    title: 'Strategies ',
    link: ROUTER_PATHS.ADMIN_STRATEGIES,
  },
  {
    title: 'Payments',
    link: ROUTER_PATHS.ADMIN_PAYMENTS,
  },
  {
    title: 'Settings',
    link: ROUTER_PATHS.ADMIN_SETTINGS,
  },
]

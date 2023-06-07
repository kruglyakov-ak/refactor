import { INavigationItem } from 'shared/types'
import { APP_ROUTER_PATHS } from './APPRouterPaths'

export const LANDING_NAV_ITEMS: INavigationItem[] = [
  {
    title: 'Trading strategies ',
    link: APP_ROUTER_PATHS.STRATEGIES,
  },
  {
    title: 'FAQ',
    link: APP_ROUTER_PATHS.FAQ,
  },
  {
    title: 'Support',
    link: APP_ROUTER_PATHS.SUPPORT,
  },
]

export const USER_NAV_ITEMS: INavigationItem[] = [
  {
    title: 'Accounts',
    link: APP_ROUTER_PATHS.USER_ACCOUNTS,
  },
  {
    title: 'Bills',
    link: APP_ROUTER_PATHS.USER_BILLS,
  },
  {
    title: 'FAQ',
    link: APP_ROUTER_PATHS.USER_FAQ,
  },
  {
    title: 'Support',
    link: APP_ROUTER_PATHS.USER_SUPPORT,
  },
  {
    title: 'Trading strategies ',
    link: APP_ROUTER_PATHS.USER_STRATEGIES,
  },
  {
    title: 'Settings',
    link: APP_ROUTER_PATHS.USER_SETTINGS,
  },
]

export const ADMIN_NAV_ITEMS: INavigationItem[] = [
  {
    title: 'Accounts',
    link: APP_ROUTER_PATHS.ADMIN_ACCOUNTS,
  },
  {
    title: 'Strategies ',
    link: APP_ROUTER_PATHS.ADMIN_STRATEGIES,
  },
  {
    title: 'Payments',
    link: APP_ROUTER_PATHS.ADMIN_PAYMENTS,
  },
  {
    title: 'Settings',
    link: APP_ROUTER_PATHS.ADMIN_SETTINGS,
  },
]

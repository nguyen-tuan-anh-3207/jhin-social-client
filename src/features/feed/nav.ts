import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const FeedPage = lazy(() => import('./index'))

export const feedPageNavName: string = 'feed'

const nav: NavigatorParams[] = [
  {
    component: FeedPage,
    isMenu: false,
    isProtected: false,
    path: '/feed'
  }
]

export const { feedNav, feedResources, feedRoutes, feedMenu } = createNav({
  name: `${feedPageNavName}`,
  nav
})

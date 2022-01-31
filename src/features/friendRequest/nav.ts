import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const FriendsRequest = lazy(() => import('./FriendsRequest'))

export const friendRequestNavName: string = 'friendRequest'

const nav: NavigatorParams[] = [
  {
    component: FriendsRequest,
    isMenu: false,
    isProtected: false,
    path: '/friend-request'
  }
]

export const {
  friendRequestNav,
  friendRequestResources,
  friendRequestRoutes,
  friendRequestMenu
} = createNav({
  name: `${friendRequestNavName}`,
  nav
})

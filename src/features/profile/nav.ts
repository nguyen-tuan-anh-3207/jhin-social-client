import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const Profile = lazy(() => import('./index'))

export const profileNavName: string = 'profile'

const nav: NavigatorParams[] = [
  {
    component: Profile,
    isMenu: false,
    isProtected: false,
    path: '/profile/:id'
  }
]

export const { profileNav, profileResources, profileRoutes, profileMenu } =
  createNav({
    name: `${profileNavName}`,
    nav
  })

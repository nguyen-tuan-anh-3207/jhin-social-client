import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const HomePage = lazy(() => import('./HomePage'))

export const homePageNavName: string = 'homePage'

const nav: NavigatorParams[] = [
  {
    component: HomePage,
    isMenu: false,
    isProtected: false,
    path: '/'
  }
]

export const { homePageNav, homePageResources, homePageRoutes, homePageMenu } =
  createNav({
    name: `${homePageNavName}`,
    nav
  })

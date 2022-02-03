import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const Group = lazy(() => import('./index'))

export const groupNavName: string = 'group'

const nav: NavigatorParams[] = [
  {
    component: Group,
    isMenu: false,
    isProtected: false,
    path: '/group'
  }
]

export const { groupNav, groupResources, groupRoutes, groupMenu } = createNav({
  name: `${groupNavName}`,
  nav
})

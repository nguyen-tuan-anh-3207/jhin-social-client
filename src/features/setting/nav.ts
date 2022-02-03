import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const Setting = lazy(() => import('./index'))

export const settingNavName: string = 'setting'

const nav: NavigatorParams[] = [
  {
    component: Setting,
    isMenu: false,
    isProtected: false,
    path: '/setting'
  }
]

export const { settingNav, settingResources, settingRoutes, settingMenu } =
  createNav({
    name: `${settingNavName}`,
    nav
  })

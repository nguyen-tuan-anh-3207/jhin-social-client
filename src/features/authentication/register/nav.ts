import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const RegisterPage = lazy(() => import('./index'))

export const registerPageNavName: string = 'register'

const nav: NavigatorParams[] = [
  {
    component: RegisterPage,
    isMenu: false,
    isProtected: false,
    path: '/register'
  }
]

export const { registerNav, registerResources, registerRoutes, registerMenu } =
  createNav({
    name: `${registerPageNavName}`,
    nav
  })

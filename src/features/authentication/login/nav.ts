import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const LoginPage = lazy(() => import('./Login'))

export const loginPageNavName: string = 'login'

const nav: NavigatorParams[] = [
  {
    component: LoginPage,
    isMenu: false,
    isProtected: false,
    path: '/login'
  }
]

export const { loginNav, loginResources, loginRoutes, loginMenu } = createNav({
  name: `${loginPageNavName}`,
  nav
})

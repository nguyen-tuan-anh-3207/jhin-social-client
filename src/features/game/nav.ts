import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const Game = lazy(() => import('./index'))

export const gameNavName: string = 'game'

const nav: NavigatorParams[] = [
  {
    component: Game,
    isMenu: false,
    isProtected: false,
    path: '/game'
  }
]

export const { gameNav, gameResources, gameRoutes, gameMenu } = createNav({
  name: `${gameNavName}`,
  nav
})

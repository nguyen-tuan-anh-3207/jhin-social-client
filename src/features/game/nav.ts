import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const Game = lazy(() => import('./index'))
const MagicMemoryGame = lazy(() => import('./MagicMemory'))

export const gameNavName: string = 'game'

const nav: NavigatorParams[] = [
  {
    component: MagicMemoryGame,
    isMenu: false,
    isProtected: false,
    path: '/game/magic-memory'
  },
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

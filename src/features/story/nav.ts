import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const StoryPage = lazy(() => import('./index'))

export const storyPageNavName: string = 'story'

const nav: NavigatorParams[] = [
  {
    component: StoryPage,
    isMenu: false,
    isProtected: false,
    path: '/story'
  }
]

export const { storyNav, storyResources, storyRoutes, storyMenu } = createNav({
  name: `${storyPageNavName}`,
  nav
})

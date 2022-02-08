import { lazy } from 'react'
import { NavigatorParams } from 'Models'
import { createNav } from 'utils/createNav'

const ChatPage = lazy(() => import('./Chat'))

export const chatPageNavName: string = 'chat'

const nav: NavigatorParams[] = [
  {
    component: ChatPage,
    isMenu: false,
    isProtected: true,
    path: '/chat'
  }
]

export const { chatNav, chatResources, chatRoutes, chatMenu } = createNav({
  name: `${chatPageNavName}`,
  nav
})

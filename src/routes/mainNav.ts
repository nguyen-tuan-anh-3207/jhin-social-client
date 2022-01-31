import { homePageNav, homePageRoutes } from 'features/home/nav'
import { chatNav, chatRoutes } from 'features/chat/nav'
import {
  friendRequestNav,
  friendRequestRoutes
} from 'features/friendRequest/nav'

export const mainNav = [...friendRequestNav, ...chatNav, ...homePageNav]

export const routes = {
  ...friendRequestRoutes,
  ...chatRoutes,
  ...homePageRoutes
}

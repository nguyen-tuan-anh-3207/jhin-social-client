import { homePageNav, homePageRoutes } from 'features/home/nav'
import { chatNav, chatRoutes } from 'features/chat/nav'
import { storyNav, storyRoutes } from 'features/story/nav'
import { profileNav, profileRoutes } from 'features/profile/nav'
import {
  friendRequestNav,
  friendRequestRoutes
} from 'features/friendRequest/nav'
import { settingNav, settingRoutes } from 'features/setting/nav'
import { gameNav, gameRoutes } from 'features/game/nav'

export const mainNav = [
  ...gameNav,
  ...settingNav,
  ...profileNav,
  ...storyNav,
  ...friendRequestNav,
  ...chatNav,
  ...homePageNav
]

export const routes = {
  ...gameRoutes,
  ...settingRoutes,
  ...profileRoutes,
  ...storyRoutes,
  ...friendRequestRoutes,
  ...chatRoutes,
  ...homePageRoutes
}

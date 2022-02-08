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
import { loginNav, loginRoutes } from 'features/authentication/login/nav'
import {
  registerNav,
  registerRoutes
} from 'features/authentication/register/nav'

export const mainNav = [
  ...gameNav,
  ...settingNav,
  ...profileNav,
  ...storyNav,
  ...friendRequestNav,
  ...chatNav,
  ...loginNav,
  ...registerNav,
  ...homePageNav
]

export const routes = {
  ...gameRoutes,
  ...settingRoutes,
  ...profileRoutes,
  ...storyRoutes,
  ...friendRequestRoutes,
  ...chatRoutes,
  ...loginRoutes,
  ...registerRoutes,
  ...homePageRoutes
}

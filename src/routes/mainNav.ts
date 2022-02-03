import { homePageNav, homePageRoutes } from 'features/home/nav'
import { chatNav, chatRoutes } from 'features/chat/nav'
import { feedNav, feedRoutes } from 'features/feed/nav'
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
  ...feedNav,
  ...friendRequestNav,
  ...chatNav,
  ...homePageNav
]

export const routes = {
  ...gameRoutes,
  ...settingRoutes,
  ...profileRoutes,
  ...feedRoutes,
  ...friendRequestRoutes,
  ...chatRoutes,
  ...homePageRoutes
}

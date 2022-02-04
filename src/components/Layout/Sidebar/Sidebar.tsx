import { Avatar } from '@mui/material'
import CardItem from 'components/CardItem'
import React from 'react'
import SidebarList from './SidebarList'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import GroupsIcon from '@mui/icons-material/Groups'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'
import SettingsIcon from '@mui/icons-material/Settings'
import ChatIcon from '@mui/icons-material/Chat'
import globalStyle from 'globalStyle'
type Props = {}

const newFeedList = [
  {
    icon: <Avatar />,
    content: 'Nguyễn Tuấn Anh',
    path: '/profile'
  },
  {
    icon: <DynamicFeedIcon />,
    content: 'Stories',
    path: '/story'
  },
  {
    icon: <PeopleAltIcon />,
    content: 'Friends',
    path: '/friend'
  },
  {
    icon: <GroupsIcon />,
    content: 'Groups',
    path: '/group'
  }
]

const morePageList = [
  {
    icon: <LiveTvIcon />,
    content: 'Live Stream',
    path: '/live-stream'
  },
  {
    icon: <VideogameAssetIcon />,
    content: 'Games',
    path: '/game'
  }
]

const accountList = [
  {
    icon: <SettingsIcon />,
    content: 'Settings',
    path: '/setting'
  },
  {
    icon: <ChatIcon />,
    content: 'Chat',
    path: '/chat'
  }
]

const Sidebar = (props: Props) => {
  const classes = globalStyle()
  return (
    <div className={classes.grid__scroll}>
      <CardItem>
        <SidebarList list={newFeedList} />
      </CardItem>
      <CardItem>
        <SidebarList title='More Pages' list={morePageList} />
      </CardItem>
      <CardItem>
        <SidebarList title='Account' list={accountList} />
      </CardItem>
    </div>
  )
}

export default Sidebar

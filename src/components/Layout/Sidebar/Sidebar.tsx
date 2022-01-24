import { Avatar } from '@mui/material'
import CardItem from 'components/CardItem'
import React from 'react'
import SidebarItem from './SidebarItem'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import GroupsIcon from '@mui/icons-material/Groups'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'
import SettingsIcon from '@mui/icons-material/Settings'
import ChatIcon from '@mui/icons-material/Chat'

type Props = {}

const newFeedList = [
  {
    icon: <Avatar />,
    content: 'Nguyễn Tuấn Anh'
  },
  {
    icon: <DynamicFeedIcon />,
    content: 'Feeds'
  },
  {
    icon: <PeopleAltIcon />,
    content: 'Friends'
  },
  {
    icon: <GroupsIcon />,
    content: 'Groups'
  }
]

const morePageList = [
  {
    icon: <LiveTvIcon />,
    content: 'Live Stream'
  },
  {
    icon: <VideogameAssetIcon />,
    content: 'Games'
  }
]

const accountList = [
  {
    icon: <SettingsIcon />,
    content: 'Settings'
  },
  {
    icon: <ChatIcon />,
    content: 'Chat'
  }
]

const Sidebar = (props: Props) => {
  return (
    <>
      <CardItem>
        <SidebarItem list={newFeedList} isMore={true} />
      </CardItem>
      <CardItem>
        <SidebarItem title='More Pages' list={morePageList} />
      </CardItem>
      <CardItem>
        <SidebarItem title='Account' list={accountList} />
      </CardItem>
    </>
  )
}

export default Sidebar

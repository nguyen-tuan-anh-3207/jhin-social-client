import { Avatar } from '@mui/material'
import CardItem from 'components/CardItem'
import React from 'react'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import GroupsIcon from '@mui/icons-material/Groups'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'
import SettingsIcon from '@mui/icons-material/Settings'
import ChatIcon from '@mui/icons-material/Chat'
import globalStyle from 'globalStyle'
import FriendRequestItem from 'components/FriendRequestItem'
import ChatRightBar from 'features/home/ChatRightBar'
type Props = {}

export type RequestList = {
  avatar: string
  name: string
}

const friendRequestList: RequestList[] = [
  {
    avatar: '',
    name: 'Lucian Cowboy'
  },
  {
    avatar: '',
    name: 'Senna Cowboy'
  }
]

const RightBar = (props: Props) => {
  const classes = globalStyle()
  return (
    <div className={classes.grid__scroll}>
      <CardItem>
        <FriendRequestItem listRequest={friendRequestList} />
      </CardItem>
      <CardItem>
        <ChatRightBar />
      </CardItem>
    </div>
  )
}

export default RightBar

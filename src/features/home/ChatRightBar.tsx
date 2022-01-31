import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import AvatarOnline from 'components/AvatarOnline'
import * as React from 'react'

type ContentSidebarChat = {
  icon: string
  username: string
}

const listUserOnline: ContentSidebarChat[] = [
  {
    icon: '',
    username: 'Lại Việt Anh'
  },
  {
    icon: '',
    username: 'Đinh Văn Giang'
  },
  {
    icon: '',
    username: 'Nguyễn Phương Linh'
  },
  {
    icon: '',
    username: 'Đào Thị Thu'
  },
  {
    icon: '',
    username: 'Lê Quốc Tuân'
  },
  {
    icon: '',
    username: 'Đinh Văn Giang'
  },
  {
    icon: '',
    username: 'Nguyễn Phương Linh'
  },
  {
    icon: '',
    username: 'Đào Thị Thu'
  },
  {
    icon: '',
    username: 'Lê Quốc Tuân'
  },
  {
    icon: '',
    username: 'Đào Thị Thu'
  },
  {
    icon: '',
    username: 'Lê Quốc Tuân'
  }
]

export default function ChatRightBar() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Friends Online
        </ListSubheader>
      }
    >
      {listUserOnline.map((listItem, index: number) => (
        <ListItemButton key={index}>
          <ListItemIcon>
            <AvatarOnline name={listItem.username} src={listItem.icon} />
          </ListItemIcon>
          <ListItemText primary={listItem.username} />
        </ListItemButton>
      ))}
    </List>
  )
}

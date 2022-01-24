import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import { boolean } from 'yup'

type ContentSidebar = {
  icon: React.ReactNode
  content: string
}

type Props = {
  title?: string
  isMore?: boolean
  list: ContentSidebar[]
}

export default function SidebarItem({ title, list, isMore }: Props) {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          {title}
        </ListSubheader>
      }
    >
      {list.map((listItem: ContentSidebar) => (
        <ListItemButton>
          <ListItemIcon>{listItem.icon}</ListItemIcon>
          <ListItemText primary={listItem.content} />
        </ListItemButton>
      ))}

      {isMore ? (
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ReadMoreIcon />
            </ListItemIcon>
            <ListItemText primary='Mores' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Starred' />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      ) : null}
    </List>
  )
}

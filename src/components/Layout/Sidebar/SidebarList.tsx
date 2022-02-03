import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import StarBorder from '@mui/icons-material/StarBorder'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import * as React from 'react'
import { Link } from 'react-router-dom'

type ContentSidebar = {
  icon: React.ReactNode
  content: string
  path: string
}

type Props = {
  title?: string
  list: ContentSidebar[]
}

export default function SidebarList({ title, list }: Props) {
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
        <Link
          to={listItem.path}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItemButton>
            <ListItemIcon>{listItem.icon}</ListItemIcon>
            <ListItemText primary={listItem.content} />
          </ListItemButton>
        </Link>
      ))}
    </List>
  )
}

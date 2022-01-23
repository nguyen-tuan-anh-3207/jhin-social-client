import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Box, IconButton } from '@mui/material'
import Badge from '@mui/material/Badge'
import ImageAvatars from 'components/Avatar'
import ThemeToggle from 'components/ThemeToggle'
import React from 'react'

type Props = {
  menuId: string
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

const HeaderRight = ({ menuId, handleProfileMenuOpen }: Props) => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <ThemeToggle />
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          edge='end'
          aria-label='account of current user'
          aria-controls={menuId}
          aria-haspopup='true'
          onClick={handleProfileMenuOpen}
          color='inherit'
        >
          <ImageAvatars
            name='anh'
            src='https://cdna.artstation.com/p/assets/images/images/021/944/344/large/z_-infinity-.jpg?1573538424'
          />
        </IconButton>
      </Box>
    </>
  )
}

export default HeaderRight

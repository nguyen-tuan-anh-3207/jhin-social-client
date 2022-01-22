import { Box, IconButton } from '@mui/material'
import React from 'react'
import MailIcon from '@mui/icons-material/Mail'
import Badge from '@mui/material/Badge'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ThemeToggle from 'components/ThemeToggle'

type Props = {
  menuId: string
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
}

const HeaderRight = ({ menuId, handleProfileMenuOpen }: Props) => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <ThemeToggle />
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
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
          <AccountCircle />
        </IconButton>
      </Box>
    </>
  )
}

export default HeaderRight

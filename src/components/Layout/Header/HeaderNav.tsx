import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import { Badge, IconButton } from '@mui/material'
import React from 'react'

type Props = {}

const HeaderNav = (props: Props) => {
  return (
    <>
      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
      >
        <Badge color='error'>
          <HomeOutlinedIcon fontSize='large' />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
      >
        <Badge color='error'>
          <AutoAwesomeOutlinedIcon fontSize='large' />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
      >
        <Badge color='error'>
          <StorefrontOutlinedIcon fontSize='large' />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
      >
        <Badge color='error'>
          <SportsEsportsOutlinedIcon fontSize='large' />
        </Badge>
      </IconButton>
      <IconButton
        size='large'
        aria-label='show 17 new notifications'
        color='inherit'
      >
        <Badge color='error'>
          <GroupsOutlinedIcon fontSize='large' />
        </Badge>
      </IconButton>
    </>
  )
}

export default HeaderNav

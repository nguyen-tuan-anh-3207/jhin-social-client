import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import { Badge, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HeaderNav = (props: Props) => {
  return (
    <>
      <Link to='/'>
        <IconButton size='large' aria-label='show 17 new notifications'>
          <Badge color='error'>
            <HomeOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
      </Link>

      <Link to='/feed'>
        <IconButton size='large' aria-label='show 17 new notifications'>
          <Badge color='error'>
            <AutoAwesomeOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
      </Link>

      <Link to='/store'>
        <IconButton size='large' aria-label='show 17 new notifications'>
          <Badge color='error'>
            <StorefrontOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
      </Link>
      <Link to='/game'>
        <IconButton size='large' aria-label='show 17 new notifications'>
          <Badge color='error'>
            <SportsEsportsOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
      </Link>
      <Link to='/group'>
        <IconButton size='large' aria-label='show 17 new notifications'>
          <Badge color='error'>
            <GroupsOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
      </Link>
    </>
  )
}

export default HeaderNav

import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import React from 'react'
import ImageAvatars from './Avatar'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  }
}))

type Props = {
  name: string
  src: string
}

const AvatarOnline = ({ name, src }: Props) => {
  return (
    <StyledBadge
      overlap='circular'
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
    >
      <ImageAvatars name={name} src={src} />
    </StyledBadge>
  )
}

export default AvatarOnline

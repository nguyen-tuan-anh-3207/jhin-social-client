import { Avatar } from '@mui/material'
import React from 'react'
import Style from './Style'

type Props = {
  profileImage: string
  bgImage: string
  title: string
}

function Story({ profileImage, bgImage, title }: Props) {
  const classes = Style()
  return (
    <div
      className={classes.story}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Avatar src={profileImage} className={classes.profilePic} />
      <h4>{title}</h4>
    </div>
  )
}

export default Story

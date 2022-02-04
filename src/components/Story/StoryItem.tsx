import { Avatar, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Style from './Style'

type Props = {
  profileImage: string
  bgImage: string
  title: string
}

function Story({ profileImage, bgImage, title }: Props) {
  const classes = Style()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <div
        onClick={handleOpen}
        className={classes.story}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Avatar src={profileImage} className={classes.profilePic} />
        <h4>{title}</h4>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          className={classes.storyModal}
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </Modal>
    </>
  )
}

export default Story

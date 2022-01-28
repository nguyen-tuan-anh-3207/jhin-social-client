import {
  Avatar,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from '@mui/material'
import React from 'react'
import { RequestList } from './RightBar'

type FriendRequestItemProps = {
  listRequest: RequestList[]
}

const FriendRequestItem = (props: FriendRequestItemProps) => {
  const { listRequest = [] } = props
  return (
    <>
      {listRequest.map((item, index: number) => {
        return (
          <div style={{ marginBottom: '15px' }}>
            <ListItemButton>
              <ListItemIcon>
                <Avatar src={item.avatar} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            <Stack spacing={2} direction='row'>
              <Button variant='contained' size='small'>
                Accept
              </Button>
              <Button variant='outlined' size='small'>
                Cancel
              </Button>
            </Stack>
          </div>
        )
      })}
    </>
  )
}

export default FriendRequestItem

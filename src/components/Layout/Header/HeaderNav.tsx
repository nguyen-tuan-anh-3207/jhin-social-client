import { Typography } from '@mui/material'
import React from 'react'

type Props = {}

const HeaderNav = (props: Props) => {
  return (
    <>
      <Typography
        variant='h6'
        noWrap
        component='div'
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        MUI
      </Typography>
    </>
  )
}

export default HeaderNav

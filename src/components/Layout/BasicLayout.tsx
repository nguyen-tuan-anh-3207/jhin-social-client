import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

const BasicLayout = (props: Props) => {
  const { children } = props
  return (
    <Grid container spacing={1}>
      <Grid item xs={2.7}>
        <Sidebar />
      </Grid>
      <Grid item xs={9.3}>
        {children}
      </Grid>
    </Grid>
  )
}

export default BasicLayout

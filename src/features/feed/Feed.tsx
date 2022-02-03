import { Grid } from '@mui/material'
import Sidebar from 'components/Layout/Sidebar'
import React from 'react'

type Props = {}

const FeedPage = (props: Props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2.7}>
        <Sidebar />
      </Grid>
      <Grid item xs={9.3}>
        feed page
      </Grid>
    </Grid>
  )
}

export default FeedPage

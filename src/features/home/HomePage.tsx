import { Container, Grid } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Sidebar from 'components/Layout/Sidebar'
import Feed from 'components/Feed'
import Story from 'components/Story'
import Style from './Style'

type Props = {}

const HomePage = (props: Props) => {
  const classes = Style()

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={6} className={classes.feed__stories}>
        <Story />
      </Grid>
      <Grid item xs={3}>
        xs=4
      </Grid>
    </Grid>
  )
}

export default HomePage

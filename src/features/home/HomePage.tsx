import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Sidebar from 'components/Layout/Sidebar'
import Story from 'components/Story'
import Style from './Style'
import Status from 'components/Status'
import Post from 'components/Post'
import RightBar from 'components/RightBar'

type Props = {}

const HomePage = (props: Props) => {
  const classes = Style()

  return (
    <Grid container spacing={1}>
      <Grid item xs={2.7}>
        <Sidebar />
      </Grid>
      <Grid item xs={6.6}>
        <div className={classes.feed__stories}>
          <Story />
        </div>
        <Status />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
      <Grid item xs={2.7}>
        <RightBar />
      </Grid>
    </Grid>
  )
}

export default HomePage

import BasicLayout from 'components/Layout/BasicLayout'
import React, { useEffect, useState } from 'react'
import Stories from 'components/Story'
import CardItem from 'components/CardItem'
import axios from 'axios'
import { Grid } from '@mui/material'
import StoryItem from 'components/Story/StoryItem'
import Style from './style'

type Props = {}

const FeedPage = (props: Props) => {
  const classes = Style()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      //fake api
      const response = await axios.get(
        'https://breakingbadapi.com/api/characters?limit=12'
      )
      setUsers(response.data)
    }
    fetchUser()
  }, [])
  return (
    <BasicLayout>
      <Grid container spacing={1} className={classes.root}>
        {users.map(({ char_id, name, img }) => (
          <Grid item xs={3}>
            <StoryItem
              key={char_id}
              bgImage={`https://source.unsplash.com/random/${char_id}`}
              profileImage={img}
              title={name}
            />
          </Grid>
        ))}
      </Grid>
    </BasicLayout>
  )
}

export default FeedPage

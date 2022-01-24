import React, { useState, useEffect } from 'react'
import StoryItem from './StoryItem'
import Style from './Style'
import axios from 'axios'

const Stories = () => {
  const classes = Style()

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      //fake api
      const response = await axios.get(
        'https://breakingbadapi.com/api/characters?limit=10'
      )

      console.log(response.data.length)
      setUsers(response.data)
    }
    fetchUser()
  }, [])

  return (
    <div className={classes.stories}>
      {users.map(({ char_id, name, img }) => (
        <StoryItem
          key={char_id}
          bgImage={`https://source.unsplash.com/random/${char_id}`}
          profileImage={img}
          title={name}
        />
      ))}
    </div>
  )
}

export default Stories

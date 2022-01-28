import { Avatar, Chip, Divider, LinearProgress, Paper } from '@mui/material'
import React, { useState } from 'react'
import Style from './Style'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded'
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded'
import { imageUploadHandler } from 'extensions/upload'
import CardItem from 'components/CardItem'
type Props = {}

const Status = (props: Props) => {
  const classes = Style()

  const [progress, setProgress] = useState(0)

  const [uploadData, setUploadData] = useState({
    description: '',
    file: {
      type: '',
      name: '',
      data: ''
    }
  })

  return (
    <CardItem>
      <div className={classes.upload__header}>
        <Avatar src={''} />
        <form className={classes.header__form}>
          <input
            placeholder={`What's on your mind?`}
            value={uploadData.description}
            onChange={(e) =>
              setUploadData({ ...uploadData, description: e.target.value })
            }
          />
          <input
            id='upload-image'
            type='file'
            accept='image/*'
            hidden
            onChange={(e) =>
              imageUploadHandler(e, 'image', setUploadData, uploadData)
            }
          />
          <input
            id='upload-video'
            type='file'
            accept='video/*'
            hidden
            onChange={(e) =>
              imageUploadHandler(e, 'video', setUploadData, uploadData)
            }
          />
          <button type='submit'>Post</button>
        </form>
      </div>
      {uploadData.file.name && !progress && (
        <div className={classes.selectedFile}>
          <Chip
            color='primary'
            size='small'
            // onDelete={resetState}
            icon={<PhotoRoundedIcon />}
            label={uploadData.file.name}
          />
        </div>
      )}
      {progress ? (
        <div className={classes.uploading}>
          <LinearProgress
            variant='determinate'
            value={progress}
            className={classes.progress}
          />
          <p>{progress} %</p>
        </div>
      ) : (
        ''
      )}
      <Divider />

      <div className={classes.upload__media}>
        <label htmlFor='upload-video' className={classes.media__options}>
          <VideocamRoundedIcon style={{ color: 'red' }} />
          <h4>Video</h4>
        </label>
        <label htmlFor='upload-image' className={classes.media__options}>
          <PhotoRoundedIcon style={{ color: 'green' }} />
          <h4>Photo</h4>
        </label>
        <div className={classes.media__options}>
          <EmojiEmotionsOutlinedIcon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </CardItem>
  )
}

export default Status

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import { Button, Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import { red } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardItem from 'components/CardItem'
import * as React from 'react'
import Style from './Style'

export default function PostItem() {
  const classes = Style()
  return (
    <CardItem>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. 😊
        </Typography>
      </CardContent>
      <CardMedia
        component='img'
        height='250'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW4WmEiGOlMKE2LdmcwX9kCZb5LHvNZvOQQ&usqp=CAU'
        alt='Paella dish'
      />
      <div className={classes.reactCount}>
        <div>
          <ThumbUpIcon style={{ color: '#2e81f4' }} fontSize='small' />
          <EmojiEmotionsIcon style={{ color: 'orange' }} fontSize='small' />
          <FavoriteIcon style={{ color: '#fc9dad' }} fontSize='small' />
        </div>
        <div>
          <span>20 comments</span>
        </div>
      </div>
      <Divider light />
      <div className={classes.post__actions}>
        <Button>
          <ThumbUpAltOutlinedIcon fontSize='small' />
          Like
        </Button>

        <Button>
          <ChatBubbleOutlineOutlinedIcon fontSize='small' />
          Comment
        </Button>

        <Button>
          <ShareOutlinedIcon fontSize='small' />
          Share
        </Button>
      </div>
      <Divider light />
    </CardItem>
  )
}

import { makeStyles } from '@mui/styles'

const Style: any = makeStyles((theme: any) => ({
  stories: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      height: 7
    },
    '&::-webkit-scrollbar-track': {},
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.type === 'dark' ? '#5c5c5c' : 'lightgrey',
      borderRadius: 10
    }
  },
  story: {
    position: 'relative',
    minWidth: '120px',
    height: '90%',
    margin: '0 5px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 0.3s ease',
    boxShadow: '0px 5px 10px -7px rgba(0, 0, 0, 0.75)',
    '& > h4': {
      position: 'absolute',
      bottom: '-5px',
      left: '10px',
      color: 'white',
      fontWeight: '600'
    },
    '&:hover': {
      transform: 'scale(1.07)'
    }
  },
  storyModal: {
    //  display: 'flex',
    //  justifyContent: 'center',
    width: '60%',
    height: '60%',
    margin: '20vh auto',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 0.3s ease',
    boxShadow: '0px 5px 10px -7px rgba(0, 0, 0, 0.75)'
  },
  profilePic: {
    margin: '5px',
    border: `5px solid #2e81f4`
  }
}))

export default Style

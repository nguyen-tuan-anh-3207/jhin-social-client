import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  root: {
    background: '#1b1523',
    textAlign: 'center',
    height: '100%',
    color: '#fff',
    '& > button': {
      background: 'none',
      border: '2px solid #fff',
      padding: '6px 12px',
      borderRadius: '4px',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1em'
    }
  },
  hover: {
    '&:hover': {
      background: '#c23866',
      color: '#fff'
    }
  },
  card: {
    position: 'relative',

    '&  .front': {
      position: 'absolute',
      transition: 'all ease-in 0.2s',
      transform: 'rotateY(90deg)'
    },
    '& img ': {
      width: '100%',
      display: 'block',
      border: '2px solid #fff',
      borderRadius: '6px'
    },

    '&  .back': {
      transition: 'all ease-in 0.2s',
      transitionDelay: '0.2s'
    }
  },
  cardFlip: {
    '& > .front': {
      transform: 'rotateY(0deg)',
      transitionDelay: '0.2s'
    },
    '& > .back': {
      transform: 'rotateY(90deg)',
      transitionDelay: '0s'
    }
  }
}))

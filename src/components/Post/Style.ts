import { makeStyles } from '@mui/styles'
export default makeStyles(() => ({
  reactCount: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px 0 10px',
    maxHeight: '40px'
  },
  post__actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px 0 20px',
    maxHeight: '40px',
    '& > button ': {
      flex: 1,
      textTransform: 'capitalize',
      color: '#66747f'
    }
  }
}))

import { makeStyles } from '@mui/styles'
const Style = makeStyles({
  grid__scroll: {
    position: 'sticky',
    top: '4rem',
    height: '95vh',
    overflow: 'scroll',
    '&::-webkit-scrollbar ': {
      width: '10px'
    },
    '&::-webkit-scrollbar-thumb ': {
      background: '#e3dddd',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-track ': {
      boxShadow: 'inset 0 0 5px #e3dddd',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#d5d0d0'
    }
  }
})

export default Style

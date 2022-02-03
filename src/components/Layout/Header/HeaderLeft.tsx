import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'
import ImageAvatars from 'components/Avatar'
import React from 'react'
import { Link } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

type Props = {}

const HeaderLeft = (props: Props) => {
  return (
    <>
      <Link to='/'>
        <IconButton
          size='large'
          edge='start'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <ImageAvatars
            name='jhin'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNOeCWSLEpkkpOmPGFbaS6Mz44chZQiOkDg&usqp=CAU'
          />
        </IconButton>
      </Link>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Start typing to search....'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </>
  )
}

export default HeaderLeft

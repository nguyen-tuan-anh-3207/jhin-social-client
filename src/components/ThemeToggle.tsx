import { useTheme } from '@emotion/react'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined'
import { Badge, IconButton } from '@mui/material'
import { ColorModeContext } from 'App'
import React from 'react'

const ThemeToggle = () => {
  const theme: any = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <Badge>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7OutlinedIcon />
        ) : (
          <Brightness4OutlinedIcon />
        )}
      </IconButton>
    </Badge>
  )
}

export default ThemeToggle

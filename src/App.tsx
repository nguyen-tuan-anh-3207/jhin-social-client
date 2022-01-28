import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Frontend from 'areas/Frontend'
import LoadingPage from 'components/LoadingPage'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
})

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={<LoadingPage />}>
          <BrowserRouter>
            <Frontend />
          </BrowserRouter>
        </React.Suspense>
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

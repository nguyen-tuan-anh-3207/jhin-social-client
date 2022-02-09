import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Link as LinkMUI,
  Typography
} from '@mui/material'
import AuthLayout from 'components/Layout/AuthLayout'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Copyright from 'components/Copyright'
import { Link } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }
  return (
    <AuthLayout>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <LinkMUI href='#' variant='body2'>
                Forgot password?
              </LinkMUI>
            </Grid>
            <Grid item>
              <Link to='/register'>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default Login

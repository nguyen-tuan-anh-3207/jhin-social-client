import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// routes
import { routes } from 'routes/mainNav'

const ProtectedRoute = ({ component: Component, isAuth, ...rest }: any) => {
  return isAuth ? (
    <Route
      {...rest}
      component={(matchProps: any) => <Component {...matchProps} />}
    />
  ) : (
    <Redirect to='/login' />
  )
}
export default ProtectedRoute

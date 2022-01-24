import React from 'react'
import { Route } from 'react-router-dom'

const NormalRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      component={(matchProps: any) => <Component {...matchProps} />}
    />
  )
}

export default NormalRoute

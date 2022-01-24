//libs
import React from 'react'
import { Route, Switch } from 'react-router-dom'
// constants
import { mainNav } from 'routes/mainNav'
// component
import ProtectedRoute from 'components/Route/ProtectedRoute'
import NormalRoute from 'components/Route/NormalRoute'
// import { useGetUser } from 'hooks/globalStores/useAuthStore'
import { getCookie } from 'utils/cookie'
import { AUTH_USER } from 'constants/string'
import { NavigatorParams } from 'Models'

const FrontEndRoutes = (props: any) => {
  // const user = useGetUser()

  // const isAuth = !!(user || getCookie(AUTH_USER))
  const isAuth = true

  const generateFrontEndRoute = (data: NavigatorParams, index: number): any => {
    if (!data) {
      return null
    }

    if (data.children && data.children.length > 0) {
      return data.children.map((item: any, index: number) =>
        generateFrontEndRoute(item, index)
      )
    }

    if (!data.component) {
      return null
    }

    if (data.isProtected) {
      return (
        <ProtectedRoute
          {...props}
          key={() => Math.random()}
          path={data.path}
          component={data.component}
          isAuth={isAuth}
        />
      )
    }

    return (
      <NormalRoute
        {...props}
        key={index}
        path={data.path}
        component={data.component}
      />
    )
  }

  const generateDefaultPage = () => {
    return <Route path={'/'} />
  }

  return (
    <Switch>
      {mainNav.map((data: NavigatorParams, index: number) =>
        generateFrontEndRoute(data, index)
      )}
    </Switch>
  )
}

const SystemRoutes = React.memo(FrontEndRoutes)

export default SystemRoutes

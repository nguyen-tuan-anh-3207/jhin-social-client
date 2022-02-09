import Header from 'components/Layout/Header'
import React from 'react'
import FrontEndRoutes from './FrontendRoutes'

type Props = {}

const Frontend = (props: Props) => {
  const isLogin = false
  return (
    <>
      {isLogin && <Header />}
      <FrontEndRoutes />
    </>
  )
}

export default Frontend

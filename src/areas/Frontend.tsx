import Header from 'components/Layout/Header'
import React from 'react'
import FrontEndRoutes from './FrontendRoutes'

type Props = {}

const Frontend = (props: Props) => {
  return (
    <>
      <Header />
      <FrontEndRoutes />
    </>
  )
}

export default Frontend

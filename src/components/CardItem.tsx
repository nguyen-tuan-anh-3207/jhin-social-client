import React from 'react'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
type Props = {
  children: React.ReactNode
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: '60px',
  margin: '10px',
  borderRadius: '10px',
  padding: '10px'
}))

const CardItem = ({ children }: Props) => {
  return <Item elevation={4}>{children}</Item>
}

export default CardItem

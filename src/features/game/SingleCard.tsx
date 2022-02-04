import { Grid } from '@mui/material'
import clsx from 'clsx'
import React from 'react'
import { CardImage } from './MagicMemory'
import Style from './style'

type Props = {
  card: CardImage
  handleChoice: (card: CardImage) => void
  flipped: boolean
  disabled: boolean
}

const SingleCard = (props: Props) => {
  const { card, handleChoice, flipped, disabled } = props
  const classes = Style(flipped)

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return (
    <Grid item xs={3} className={classes.card}>
      <div className={flipped ? classes.cardFlip : ''}>
        <img className='front' src={card.src} />
        <img
          className='back'
          onClick={handleClick}
          src='/img/game/cover.png'
          alt='back image'
        />
      </div>
    </Grid>
  )
}

export default SingleCard

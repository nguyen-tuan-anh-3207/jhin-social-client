import CardItem from 'components/CardItem'
import BasicLayout from 'components/Layout/BasicLayout'
import React, { useEffect, useState } from 'react'
import { cardMemoryGames } from 'constants/index'
import Style from './style'
import { Container, Grid } from '@mui/material'
import SingleCard from './SingleCard'

export type CardImage = {
  src: string
  id?: number
  matched: boolean
}

type Props = {}

const MagicMemory = (props: Props) => {
  const classes = Style()
  const [cards, setCards] = useState<Array<CardImage>>([])
  const [turn, setTurn] = useState<number>(0)
  const [choiceOne, setChoiceOne] = useState<CardImage | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<CardImage | null>(null)
  const [disabled, setDisabled] = useState<boolean>(false)

  const getShuffleCards = () => {
    const shuffledCards = [...cardMemoryGames, ...cardMemoryGames]
      .sort(() => Math.random() - 0.5)
      .map((card: CardImage) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurn(0)
  }

  // handle choice
  const handleChoice = (card: CardImage) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurn((preTurn) => preTurn + 1)
    setDisabled(false)
  }

  // compare 2 selected card
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        // do something here
        setCards((preCards: any) => {
          return preCards.map((card: any) => {
            if (card.src === choiceOne.src) {
              return {
                ...card,
                matched: true
              }
            }
            return card
          })
        })
        resetTurn()
      } else {
        setTimeout(() => {
          resetTurn()
        }, 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // automatically start a new game
  useEffect(() => {
    getShuffleCards()
  }, [])

  return (
    <BasicLayout>
      <CardItem>
        <div className={classes.root}>
          <h1>Magic Match</h1>
          <button className={classes.hover} onClick={getShuffleCards}>
            New Game
          </button>
          <Container>
            <Grid container>
              {cards.map((card) => (
                <SingleCard
                  card={card}
                  key={card.id}
                  handleChoice={handleChoice}
                  disabled={disabled}
                  flipped={
                    card === choiceOne || card === choiceTwo || card.matched
                  }
                />
              ))}
            </Grid>
          </Container>

          <p>Turns: {turn}</p>
        </div>
      </CardItem>
    </BasicLayout>
  )
}

export default MagicMemory

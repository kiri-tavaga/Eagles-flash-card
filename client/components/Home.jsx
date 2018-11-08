import React from 'react'
import {Link} from 'react-router-dom'
import cards from '../../server/public/cards.json'
import DrawButton from './DrawButton'
import Card from './Card'

export default class Home extends React.Component {
  Constructor (props) {
    Super(props)

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: cards.Cards[0],
      currentCard: {}
    }
  }
  componentDidMount () {
    const currentCard = this.state.cards
    this.setState({

      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard (currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return card
  }
  render () {
    return (
      <div>
        <div className='ccontainer'>
          <div className='cardRow'>
            <Card questions={this.state.currentCard.questions} />
            <Card answers={this.state.currentCard.answers} />
          This is a card
          </div>
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>

    )
  }
}

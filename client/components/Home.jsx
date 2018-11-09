import React from 'react'
import {Link} from 'react-router-dom'
import cards from '../../server/public/cards.json'
import DrawButton from './DrawButton'
import Card from './Card'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    console.log(this)

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: cards.Cards,
      currentCard: {},
      flipped:false
    }
  }
  componentDidMount () {
    const currentCards = this.state.cards
    this.setState({

      cards: currentCards,
      currentCard: this.getRandomCard(currentCards),
      flipped:false
    })
  }

  getRandomCard (currentCards) {
    let card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return card
  }

  updateCard () {
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  flipHandler = () => {
    this.setState({
      flipped:true
    })
  }

  flipBackHandler = () => {
    this.setState({
      flipped:false
    })
  }

  render () {
    return (
      <div>
        <div className='ccontainer'>
          <div className='cardRow'>
            <div className='card' onMouseEnter={this.flipHandler} onMouseLeave={this.flipBackHandler}>
              {this.state.flipped ? <Card answers={this.state.currentCard.answers} /> : <Card questions={this.state.currentCard.questions} /> } 
              
            </div>
          </div>
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>

    )
  }
}

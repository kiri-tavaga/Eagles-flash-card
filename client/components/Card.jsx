import React from 'react'
import '../../server/public/flashCard.css'

export default class Card extends React.Component {
  constructor (props) {
    super(props)
    this.drawCard = this.drawCard.bind(this)
  }
  drawCard () {
    this.props.drawCard()
  }
  render (props) {
    return (
      <div className='buttonContainer'>
        <button className='btn' onClick={this.drawCard}>Draw Card</button>
      </div>
    )
  }
}

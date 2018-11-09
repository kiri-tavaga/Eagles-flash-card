import React from 'react'
import {Link} from 'react-router-dom'
import cards from '../../server/public/cards.json'
// import fs from 'fs'
import * as localDb from '../localDb'

export default class CreateCard extends React.Component {
  state = {
    question:'',
    answer:''
  }

  componentDidMount () {
    this.setState({
      items: localDB.getItems()
    })
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // saveDataHandler = e => {
  //   let newCard = {questions:this.state.question, 
  //     answers:this.state.answer}
  //   let oldCards = JSON.parse(cards)
  //   let newCards = oldCards.push(newCard)
  //   // fs.writeFile('../../server/public/cards.json', JSON.stringify(newCards), function(err) {
  //   //   if (err) {
  //   //     return console.log('an error occured')
  //   //   }
  //   //   console.log("saved")
  //   //   })
  //   // }  

  render () {
    return (
      <div className='createCard'>
        <h2>Create Card</h2>
        <form>
          <input type='text' value={this.state.question} name='question' onChange={this.changeHandler} placeholder='Type your question here!' />
          <br /><br />
          <input type='text' value={this.state.answer} name='answer' onChange={this.changeHandler} placeholder='Type your answer!' />
          <br /><br /><br /><br />
          <button onClick={this.saveDataHandler}>
           Save and add new card
          </button>
          <button onClick={this.saveDataHandler}>
             Start flashcard!
          </button>
          </form>

      </div>
    )
  }
}

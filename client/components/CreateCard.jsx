import React from 'react'
import {Link} from 'react-router-dom'

export default class CreateCard extends React.Component {
  state = {
    question:'',
    answer:''
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  saveDataHandler = e => {
    //we save data here
  }

  render () {


    return (
      <div className='createCard'>
        <h2>Create Card</h2>
        <form>
          <input type='text' value={this.state.question} name='question' onChange={this.changeHandler} placeholder='Type your question here!' />
          <br /><br />
          <input type='text' value={this.state.answer} name='question' onChange={this.changeHandler} placeholder='Type your answer!' />
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

import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// import Home from './Home'
import CreateCard from './CreateCard'
import FlashCard from './FlashCard'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Flash Card</h1>

        <div className='container'>
          {/* <Route path='/' component={Home} /> */}
          <div className='content'>
            <Route exact path='/' component={CreateCard} />
            <Route path='/create' component={CreateCard} />
            <Route path='/flashcard' component={FlashCard} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

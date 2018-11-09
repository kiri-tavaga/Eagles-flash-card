import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import CreateCard from './CreateCard'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Flash Card</h1>

        <div className='container'>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateCard} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

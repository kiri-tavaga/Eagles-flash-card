import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import DrawButton from '../client/components/DrawButton';

test('<App />', () => {
  const expected = true
  const wrapper = shallow(<App />)
  const actual = wrapper.containsMatchingElement(DrawButton)
  expect(actual).toBe(expected)

})

// test('<Home /> includes a <Card /> component', () => {

//   const card = ['card']
//   const expected = true

//   const wrapper = render(<Home card={card}/> )
//   const actual = wrapper.find('card')
//   expect(actual).toBe(expected)
// })


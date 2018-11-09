import React from 'react'
// import '../../server/public/flashCard.css'

const Card = (props) => (
  <div >
    {/* <div className='card'> */}
      <div className='front'>
        <div className='questions'>
          {props.questions}
        </div>
      </div>
      <div className='back'>
        <div className='answers'>
          {props.answers}
        </div>
      </div>
    {/* </div> */}
  </div>
)
export default Card

import React from 'react'
import grad from './Assets/sqi-graduate1.webp'

const Main4 = () => {
  return (
    <div className='container-md row align-items-center mx-auto justify-content-between'> 
        <img className='col-md' src={grad} alt="" />
        <div className='col-md mx-md-4'>
            <h1>
            Making Africa a Tech Continent…
            </h1>
            <p className='text-secondary hh'>We focus on quality teaching, learning and training to the globally acceptable productivity standard in accordance with the requirements of the industry, for which necessary research and preparation of courses are ensured to make industry-ready professionals.</p>
            <p className="text-secondary hh">SQI College of ICT is closely watching the interaction of industry and academia, getting feedback from our industry partners to provide the needed training while concentrating to contribute industry needed professionals in a very flexible study structure.</p>
        </div>
    </div>
  )
}

export default Main4
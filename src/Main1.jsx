import React from 'react'
import per from './Assets/sqimodel.webp'

const Main1 = () => {
  return (
    <div className='row container-md  mx-auto align-items-center py-4'>
        <div className='col-md'>
            <h1 className='st fw-bold text-primary'>Study to become a global talent</h1>
            <p className='fw-bold oj'>Learn new tech skills using world-class curriculum and top industry experts.</p>
            <button className="btn btn-primary cs">Start now</button>
        </div>
        <img className='col-md ' src={per} alt="" />
    </div>
  )
}

export default Main1
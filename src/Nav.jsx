import React from 'react'
import Logo from './Assets/co.jpg'
const Nav = () => {
  return (
    <nav className='shadow'>

    <div className='d-flex  align-items-center justify-content-between p-3 container-md'>
        <img className='sqi' src={Logo} alt="" />
        <div className="d-flex">
          <div className="par position-relative mx-3 fw-bold text-primary">
            <a href="#" className='text-decoration-none h-e'>About</a>
            <div className="chi text-black shadow">
              <p>Our Story</p>
              <p>Our Team</p>
            </div>
          </div>
          <div className="par position-relative mx-3 fw-bold text-primary">
            <a href="#" className='text-decoration-none h-e'>Programmes</a>
            <div className="chi text-black  shadow">
              <p>National Innovation Diploma</p>
              <p>Professional Dipoma Program</p>
              <p>Executive Professional Certificate program</p>
            </div>
          </div>
          <div className="par position-relative mx-3 fw-bold text-primary">
            <a href="#" className='text-decoration-none h-e'>Admissions</a>
            <div className="chi text-black shadow">
              <p>Apply for a Program</p>
              <p>Mode of Study</p>
              <p>Tuition</p>
              <p>Frequently asked questions</p>
            </div>
          </div>
          <div className="par mx-3 fw-bold text-primary"><a className='text-decoration-none h-e' href="#">SQI Scholarship</a></div>
          <div className="par mx-3 fw-bold text-primary"><a className='text-decoration-none h-e' href="#">News</a></div>
          {/* <div className="par mx-3 fw-bold text-primary">Programmes</div>
          <div className="par mx-3 fw-bold text-primary">Admisions</div>
          <div className="par mx-3 fw-bold text-primary">E-portal</div>
          <div className="par mx-3 fw-bold text-primary">SQI Scholarship</div>
          <div className="par mx-3 fw-bold text-primary">News</div> */}
        </div>
    </div>

    </nav>
  )
}

export default Nav
import React from 'react'
import './Navbar'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
        <div className="logo">
            <span className='text'>InstantGig</span>
        </div>

        <div className="links">
          <span>Gig Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
        </div>
        </div>
    </div>
    
  )
}

export default Navbar
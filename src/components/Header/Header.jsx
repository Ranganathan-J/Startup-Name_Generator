import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div>
        <header>
     <h1 className='sign'>g<span className='fast-flicker'>et</span><span className='flicker'>Name</span></h1>
     <div className="typed-container">
     Your perfect Startup name finder
    <span className="cursor"></span> 
    </div>
     </header>
    </div>
  )
}

export default Header
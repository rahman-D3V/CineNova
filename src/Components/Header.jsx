import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='absolute px-8 py-3 z-10  bg-gradient-to-b from-black'>
      <Link to={'/'}>
      <img 
        className='w-40'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="netflix-logo" />
        </Link>
    </div>
  )
}

export default Header
import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <div>Header</div>
    <nav className='nav'>
        <Link to = "/">
            <div>MERN Skeleton Frontend </div>
        </Link>
    </nav>
  )
}

export default Header
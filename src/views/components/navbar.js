import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='w-full h-12  shadow-lg bg-black_2'>
        <Link to={"/"}><p>Home</p></Link>
    </nav>
    )
}

export default NavBar;
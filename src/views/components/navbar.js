import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='w-full h-14 flex items-center justify-center shadow-lg bg-black_2'>
        <Link to={"/"}><p className='text-white font-bold text-2xl'>AlvaCode</p></Link>
    </nav>
    )
}

export default NavBar;
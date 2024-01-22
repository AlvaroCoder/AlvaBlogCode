import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='w-full py-6 flex items-center justify-center shadow-lg bg-black_1'>
        <Link to={"/"}><p className='text-white font-bold text-4xl'>AlvaCode</p></Link>
    </nav>
    )
}

export default NavBar;
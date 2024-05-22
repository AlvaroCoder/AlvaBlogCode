import React from 'react'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function NavBarBlog() {
  return (
    <nav className={`py-6 px-16 flex  shadow-lg bg-black_1`}>
        <Link className='flex flex-row items-center' to={"/"}>
          <img src={'https://res.cloudinary.com/dabyqnijl/image/upload/c_thumb,w_200,g_face/v1707230326/logos/Group_21_ed6vbv.png'} height={30} width={40} alt='Logo AlvaCode' />
          <div className='flex flex-row items-center'>
            <p className='text-white opacity-50 font-bold text-[0px] md:text-3xl font-sans mx-4'>AlvaCode</p>
            <ChevronRightIcon className='text-4xl text-white'/>
            <p className='text-white font-bold text-xl md:text-3xl font-sans mx-4' >Blog</p>
          </div>
        </Link>        
        
    </nav>
  )
}
;
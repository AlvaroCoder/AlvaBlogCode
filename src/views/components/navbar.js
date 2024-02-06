import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className=' py-6  flex justify-center shadow-lg bg-black_1'>
      <div className='w-[80%] flex flex-row items-center px-6 justify-between'>
          <Link className='flex flex-row items-center' to={"/"}>
            <img src={'https://res.cloudinary.com/dabyqnijl/image/upload/c_thumb,w_200,g_face/v1707230326/logos/Group_21_ed6vbv.png'} height={30} width={40} alt='Logo AlvaCode' />
            <p className='text-white font-bold text-4xl font-serif mx-4'>AlvaCode</p>
          </Link>
        
        <div className='flex flex-row items-center'>
          <div className='mx-2'>
            <input className='rounded-lg py-2 px-4 my-2 bg-black_2 text-title_white outline-none ' placeholder='Buscar' ></input>
          </div>
          <div className='cursor-pointer rounded-lg  border-2 border-black_1 hover:border-gray-300  p-2'>
            <a target='_blank' rel='noreferrer' aria-label='Sigueme en Instagram' href='https://www.instagram.com/alvarocoder/' ><img src='https://res.cloudinary.com/dabyqnijl/image/upload/v1707196647/logos/Instagram_icon_a38tn6.png' height={30} width={30} alt='Imagen Instagram' /></a>
          </div>
                    
        </div>
      </div>
    </nav>
    )
}

export default NavBar;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import ButtonSearch from './elements/buttonSearch';

function NavBar({changeBlur}) {
  const [listNavigation, setListNavigation] = useState([
    {title : "Blog", selected : true},
  ]);

  return (
    <nav className={`py-6  flex justify-center shadow-lg bg-black_1 `}>
      <div className='w-[80%] flex flex-row items-center px-6 justify-between'>
          <Link className='flex flex-row items-center' to={"/"}>
            <img src={'https://res.cloudinary.com/dabyqnijl/image/upload/c_thumb,w_200,g_face/v1707230326/logos/Group_21_ed6vbv.png'} height={30} width={40} alt='Logo AlvaCode' />
            <p className='text-white font-bold text-xl md:text-4xl font-serif mx-4'>AlvaCode</p>
          </Link>
        
        <div className='flex flex-row items-center'>
          {/* <div className='flex flex-row items-center mx-4'>
            {
              listNavigation.map((item, key)=>{
                return (
                  <p key={key} className={`text-white px-4 py-2 cursor-pointer ${item.selected && 'border-b-blanco border-b'}`}>{item.title}</p>
                )
              })
            }
          </div> */}
          <a target='_blank' rel='noreferrer' aria-label='Sigueme en Instagram' href='https://www.instagram.com/alvarocoder/' >
          <div className='cursor-pointer rounded-lg border-[1px] p-6 h-8 w-8 flex items-center justify-center mx-3 border-slate-600 hover:bg-slate-700 bg-gray-800'>
            <InstagramIcon className='text-rojo'/>
          </div>
          </a>
        </div>
      </div>
    </nav>
    )
}

export default NavBar;
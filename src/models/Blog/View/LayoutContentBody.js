import React from 'react'
import { PostBlog } from './Components'
const URL_IMAGE_NOT_FOUND = "https://res.cloudinary.com/dabyqnijl/image/upload/v1726167464/ed5bhheipimdex6yugs0.png"
export default function LayoutContentBody({
  contentPosts=[],
}) {
  return (
    <section className='w-full min-h-screen px-6 py-4'>
      <div className='grid  grid-cols-1  gap-6 h-auto '>
        {
          contentPosts.length > 0 ? 
          contentPosts.map((items,idx)=><PostBlog key={idx}  {...items} />)
          : <div className='flex flex-col justify-center items-center'>
            <img
            className='w-60'
              src={URL_IMAGE_NOT_FOUND}
              alt='Imagen not found'
            />
            <p className='text-white font-bold text-3xl'>No existen resultados</p>
          </div>
        }
      </div>
    </section>  
)
}
;
import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function PostBlog({
  title="Lorem Ipsum", 
  description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  img=null,
  categories=[{name:"JavaScript"}],
  createdAt="21-05-2023",
  id=""
}) {
  
  return (
    <div className='col-span-2 py-2 flex flex-col '>
      <div className='w-full lg:h-[70%] h-fit rounded-lg '>
        {
          img  == null ?       <div className='bg-slate-400 '/>:
          <a href={`post/${id}`}>
            <img src={img['url']} alt='Imagen' className='w-full h-full object-cover rounded-lg' />
          </a>}
      </div>

      <a href={`post/${id}`}>
        <p className='my-2 w-fit pr-2 border-b-2 border-b-black_1 hover:underline  hover:cursor-pointer font-sans text-3xl font-bold  text-white'>
            {title}
        </p>
      </a>
      <p className='font-sans text-lg text-white'>
        {description}
      </p>
      <div className='flex flex-row my-2'>
        <p className='text-naranja font-sans font-bold'>
          {categories[0].name}
        </p>
        <p className='ml-4 text-white opacity-40 flex flex-row items-center'>
          <CalendarTodayIcon className='mr-2'/>
          {createdAt}
        </p>
      </div>
    </div>
  )
}
;
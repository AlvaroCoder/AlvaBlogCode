import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function HorizontalPostBlog({
    title="Lorem Ipsum",
    categories=[{name:"JavaScript"}],
    createdAt="21-05-2023",
    img=null,
    id=""
}) {
  return (
    <div className=' flex flex-row my-2 items-start'>
        {
            img == null ?         <div className='w-36 h-24 rounded-lg bg-slate-400'/> : 
            <a href={`post/${id}`}>
                <img src={img['url']} alt='Imagen' className='w-36 h-24 object-cover rounded-lg' />
            </a>
            }
        <div className='ml-2  flex-1 flex flex-col'>
            <a href={`post/${id}`}>
                <p className='font-sans pr-2 border-b-2 border-b-black_1 hover:underline hover:cursor-pointer text-white font-bold text-xl'>
                    {title}
                </p>
            </a>
            <div className='flex flex-row items-center mt-2'>
                <p className='text-naranja font-sans  text-sm font-bold'>
                    {categories[0].name}
                </p>
                <p className='ml-4 text-white text-sm opacity-40 flex flex-row items-center'>
                    <CalendarTodayIcon style={{width : 18 , height : 18}} className='mr-2'/>
                    {createdAt}
                </p>
            </div>
        </div>
    </div>
  )
}
;
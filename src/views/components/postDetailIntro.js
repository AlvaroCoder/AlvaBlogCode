import React from 'react'

function postDetailIntro({
    iconContent,
    createdAt,
    heading,
    description
}) {
  return (
    <div className='w-full my-4  flex flex-col  justify-center items-center md:flex md:flex-row'>
        <div className='w-full h-[420px]  p-6 md:w-1/2'>
        <img className='w-full h-full object-cover rounded-lg  md:w-[720px]' src={iconContent.url} alt={iconContent.id}/>
        </div>
        <div className='md:w-[40%] w-full px-4'>
            <h1 className='font-sans md:text-6xl  text-5xl text-white font-bold'>{heading}</h1>
            <p className='lg:w-[400px] font-sans text-white mt-5 mb-4 text-lg text-[nowrap]'>{description}</p>
        </div>
    </div>
  )
}

export default postDetailIntro;
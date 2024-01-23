import React from 'react'

function postDetailIntro({
    iconContent,
    createdAt,
    heading,
    description
}) {
  return (
    <div className='w-full my-4  flex flex-col  justify-center items-center md:flex md:flex-row'>
        <div className='w-full  p-6 md:w-1/2'>
        <img className='w-full h-[420px] rounded-md object-contain md:object-cover md:w-[720px]' src={iconContent.url} alt={iconContent.id}/>
        </div>
        <div className='md:w-[620px] w-full px-4'>
            <h1 className='md:text-3xl text-2xl text-white font-bold'>{heading}</h1>
            <p className='text-white mt-5 mb-4'>{description}</p>
        </div>
    </div>
  )
}

export default postDetailIntro;
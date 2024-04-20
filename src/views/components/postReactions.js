import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
export default function postReactions({numLikes=0, numComments=0}) {
  return (
    <div className='p-6 my-4 flex flex-row justify-center items-center rounded-lg bg-black_2 shadow-md overflow-hidden  before:bg-black_2 before:absolute before:left-0 before:top-0  '>
        <div className='flex  flex-row cursor-pointer  mx-4'>
            <FavoriteBorderIcon className='text-white'/>
            <p className='text-white mx-2'>{numLikes}</p>
        </div>
        <p className='border border-blanco h-10'></p>
        <div className='flex flex-row cursor-pointer mx-4'>
            <ChatBubbleOutlineIcon className='text-white'/>
            <p className='text-white mx-2'>{numComments}</p>
        </div>
    </div>
  )
}
;
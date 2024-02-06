import React from 'react'
import { Link } from 'react-router-dom';
function PostContentCard({
    dataPosts
}) {
    const {title,  id, img, createdAt} = dataPosts;
    return (
    <div className='w-full h-auto py-2 mt-5'>
        <a className='block rounded-lg overflow-hidden mb-4' href={`post/${id}`}>
          <img className='' src={img.url} alt={img.id} />
        </a>
        <h1 className='font-bold text-2xl text-title_white my-4 hover:underline'><Link to={`post/${id}`}>{title}</Link></h1>
        <div className='text-title_white flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <h2 className='text-title_white ml-4'>{createdAt}</h2>
        </div>
    </div>
  )
}

export default PostContentCard;
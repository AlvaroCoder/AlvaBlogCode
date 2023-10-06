import React from 'react'
import { Link } from 'react-router-dom';
function PostContentCard({
    dataPosts
}) {
    const {title, description, id, img} = dataPosts;
  return (
    <div className='w-full h-auto py-2 mt-5'>
        <img src={img.url} alt={img.id} />
        <h1 className='font-bold text-2xl'><Link to={`post/${id}`}>{title}</Link></h1>
        <p>{description}</p>
    </div>
  )
}

export default PostContentCard;
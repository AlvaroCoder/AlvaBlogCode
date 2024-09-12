import React from 'react'
import { Link } from 'react-router-dom';
function PostContentCard({
    dataPosts
}) {
    const {title,  id, img, categories} = dataPosts;
    return (
    <div className='w-full h-auto py-2 mt-5'>
        <a className='block rounded-lg overflow-hidden mb-4' href={`post/${id}`}>
          <img className='' src={img.url} alt={img.id} />
        </a>
        <h1 className='font-bold text-2xl text-blanco my-4 hover:underline font-serif '><Link to={`post/${id}`}>{title}</Link></h1>
        <section className='w-full flex flex-row my-2 '>
          {
            categories && categories.map(cat=>{
              return <p className='px-4 rounded-lg text-amarillo font-bold font-serif'>#{cat.name}</p>
            })
          }
        </section>

    </div>
  )
}

export default PostContentCard;
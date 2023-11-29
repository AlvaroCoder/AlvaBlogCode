import React from 'react'
import { PostContentCard } from './components';

function PostView({
    contentData
}) {
  return (
    <div className='w-full h-full py-4 px-8'>
        <h1 className='text-2xl text-title_white font-bold'>Últimos artículos</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8'>
            {
                contentData.map((val,key)=>{
                    return <PostContentCard key={key} dataPosts={val} />
                })
            }
        </div>
    </div>
  )
}

export default PostView;
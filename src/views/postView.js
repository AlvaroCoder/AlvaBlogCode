import React from 'react'
import { PostContentCard } from './components';

function PostView({
    contentData
}) {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-2/4 h-auto py-4'>
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
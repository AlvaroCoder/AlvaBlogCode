import React from 'react'
import { PostBlog } from './Components'

export default function LayoutContentBody({
  contentPosts=[],
}) {
  return (
    <section className='w-full h-fit px-6 py-4'>
      <div className='grid grid-cols-3 grid-flow-rows gap-6'>
        {
          contentPosts.map((items,idx)=><PostBlog key={idx}  {...items} />)
        }
      </div>
    </section>  
)
}
;
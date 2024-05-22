import React from 'react'
import {MainPostBlog, HorizontalPostBlog} from './Components'
export default function LayoutUpper({
    mainContentPost,
    topContentPosts=[{},{},{}]
}) {
  return (
    <section className='w-full h-fit px-6 py-4'>
        <div className=' min-h-screen grid grid-cols-3 grid-flow-row gap-6'>
            <MainPostBlog {...mainContentPost}/>
            <div>
                <h1 className='font-sans text-3xl text-naranja opacity-60 mb-2'>Top</h1>
                <div className='grid grid-rows-3 gap-2'>
                    {
                        topContentPosts.map((contentPost, idx)=><HorizontalPostBlog key={idx} {...contentPost}/>)
                    }
                </div>

            </div>
        </div>
    </section>
  )
}
;
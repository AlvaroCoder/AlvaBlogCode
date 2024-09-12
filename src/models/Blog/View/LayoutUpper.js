import React from 'react'
import {MainPostBlog, HorizontalPostBlog} from './Components'
export default function LayoutUpper({
    mainContentPost,
    topContentPosts=[{},{},{}]
}) {
  return (
    <section className='w-full h-fit px-6 py-4'>
        <div className=' min-h-screen  grid lg:grid-cols-3 grid-cols-2 grid-flow-row gap-6'>
            <MainPostBlog {...mainContentPost}/>
            <div className='col-span-2 lg:col-span-1 '>
                <h1 className='font-sans text-3xl pb-2 text-naranja border-b-4 border-b-naranja mb-2'>Top Blog</h1>
                <div className='grid grid-rows-3 gap-2 '>
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
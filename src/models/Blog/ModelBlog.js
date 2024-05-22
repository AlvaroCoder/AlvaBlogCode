import React from 'react'
import { LayoutUpper, LayoutContentBody } from './View'
export default function ModelBlog({
  contentPostsBody=[],
  mainContentPost={},
  topContentPost=[]
})
{
  return (
    <main className='flex-1 flex items-center justify-center bg-black_1 px-10' >
      <section className=''>
        <LayoutUpper mainContentPost={mainContentPost} topContentPosts={topContentPost} />
        <LayoutContentBody contentPosts={contentPostsBody}/>
      </section>
    </main>
  )
}
;
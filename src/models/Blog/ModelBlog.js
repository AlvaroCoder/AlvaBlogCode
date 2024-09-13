import React from 'react'
import { LayoutUpper, LayoutContentBody } from './View'
import { SkeletonCard } from '../../views/components'
export default function ModelBlog({
  contentPostsBody=[],
  mainContentPost={},
  topContentPost=[],
  dataCategories=[],
  filterData,
  loadingData=false
})
{  
  return (
    <main className='flex-1 flex items-center justify-center bg-black_1 px-6' >
      <section className='flex-1 flex flex-row justify-center '>
        <section className='h-fit mx-4  relative md:mb-0 mb-8 before:w-full before:!h-1 md:sticky top-0 '>
          <div className='max-w-[200px] w-full h-full mt-4 bg-black_2  p-6 rounded-lg shadow-sm before:bg-black_2 before:absolute before:left-0 before:top-0 border-t-4 border-t-amarillo'>
          <h1 className='text-white text-2xl'>Categorias</h1>
            <section className='mt-4'>
            {
              dataCategories.map((item, key)=>
                <p 
                  key={key} 
                  
                  className='hover:bg-white hover:text-black_1 cursor-pointer capitalize text-white p-2 rounded-sm '
                  onClick={()=>filterData(item?.slug)}
                  >
                  {item?.name}
                </p>
              )
            }
            </section>
          </div>
        </section>
        {loadingData ? <div className='w-full h-fit px-6 py-4'>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
        </div> : <LayoutContentBody contentPosts={contentPostsBody}/>}
      </section>
    </main>
  )
}
;
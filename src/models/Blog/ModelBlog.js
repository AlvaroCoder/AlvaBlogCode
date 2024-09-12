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
      <section className='flex-1 flex flex-row'>
        <div className='w-[300px] h-full'>
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
        {loadingData ? <div className='w-full h-fit px-6 py-4'>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
          <SkeletonCard/>
        </div> : <LayoutContentBody contentPosts={contentPostsBody}/>}
        <div className='hidden xl:block w-[600px]'>

        </div>
      </section>
    </main>
  )
}
;
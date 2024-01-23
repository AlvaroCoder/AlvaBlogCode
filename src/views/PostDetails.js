import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContenPostDetail } from '../utils/fetchDataCMS';
import {PostDetail, PostDetailIntro, SkeletonCard} from './components'
function PostDetails() {
    const [detailPosts, setDetailPosts] = useState(null);
    const [Loading, setLoading] = useState(false);
    const {id} = useParams();
    useEffect(()=>{
        (async ()=>{
            setLoading(true);
            const detailPost = await getContenPostDetail(id);
            const jsonPost = await detailPost.json();
            setDetailPosts(jsonPost.message);
            setLoading(false);
          })()
    },[id])
    if (Loading) {
      return(
          <div className='h-screen w-full overflow-hidden bg-black_1'>
            <div className='overflow-hidden grid grid-cols-1 pb-8 md:grid-cols-2 px-4 py-4 w-full md:w-[80%] gap-2'>
                <SkeletonCard/>
            </div>
          </div>
      )
    }
    return (
      <main className='w-full h-auto bg-black_1'>
        <section className='w-full py-6 '>
          {detailPosts ?  <PostDetailIntro {...detailPosts} /> : null}
        </section>  
        <section className='w-full col-span-full lg:col-span-7 flex justify-center items-center py-6'>
          <div className='md:w-[80%] w-full bg-black_2 p-6 rounded-lg '>
            {detailPosts ? <PostDetail post={detailPosts.content.json} /> : null}
          </div>
        </section>
      </main>
    )
}

export default PostDetails;
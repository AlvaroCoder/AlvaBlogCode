import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContenPostDetail } from '../utils/fetchDataCMS';
import {PostDetail, PostDetailIntro} from './components'
function PostDetails() {
    const [detailPosts, setDetailPosts] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        (async ()=>{
            const detailPost = await getContenPostDetail(id);
            const jsonPost = await detailPost.json();
            setDetailPosts(jsonPost.message);
        })()
    },[id])
  return (
    <main className='w-full h-auto bg-black_1'>
      <section className='w-full h-screen '>
        {detailPosts ?  <PostDetailIntro {...detailPosts} /> : null}
      </section>  
      <section className='w-full col-span-full lg:col-span-7'>
        {detailPosts ? <PostDetail post={detailPosts.content.json} /> : null}
      </section>
    </main>
  )
}

export default PostDetails;
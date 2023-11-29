import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContenPostDetail } from '../utils/fetchDataCMS';
import PostDetail from './components/postDetail';

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
    <main className='w-full h-auto py-4 bg-black_1'>
      <section className='w-full h-1/3'>

      </section>
      <section className='w-full col-span-full lg:col-span-7'>
        {detailPosts ? <PostDetail post={detailPosts} /> : null}
      </section>
    </main>
  )
}

export default PostDetails;
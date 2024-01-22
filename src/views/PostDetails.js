import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContenPostDetail } from '../utils/fetchDataCMS';
import {PostDetail, PostDetailIntro} from './components'
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
        <div>
          <h1>Cargando</h1>
        </div>
      )
    }
    return (
      <main className='w-full h-auto bg-black_1'>
        <section className='w-full py-6 '>
          {detailPosts ?  <PostDetailIntro {...detailPosts} /> : null}
        </section>  
        <section className='w-full col-span-full lg:col-span-7 flex justify-center items-center py-6'>
          <div className='w-[80%] bg-black_2 p-6 rounded-lg '>
            {detailPosts ? <PostDetail post={detailPosts.content.json} /> : null}
          </div>
        </section>
      </main>
    )
}

export default PostDetails;
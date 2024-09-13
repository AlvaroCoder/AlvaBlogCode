import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContenPostDetail } from '../utils/fetchDataCMS';
import {CardTitles, PostDetail, PostDetailIntro, SkeletonCard} from './components'
import { CommentForm } from './components/Blog';
function PostDetails() {
    const [detailPosts, setDetailPosts] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [resume, setResume] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        (async ()=>{
            setLoading(true);
            const detailPost = await getContenPostDetail(id);
            const jsonPost = await detailPost.json();
            const message = jsonPost.message.content.json.children;
            const addCategorieToResume =(data)=>{
              return data.map((val)=>{
                if (val.type==="heading-one") {
                  const item = val.children[0].text;
                  return item;
                }
                return null
              }).filter((item)=>item!==null);
            }
            const newResume = addCategorieToResume(message);
            setResume(newResume);
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
        <section className='w-full col-span-full lg:col-span-7 flex lg:flex-row flex-col-reverse md:items-start items-center justify-center py-6'>
          <div className='lg:w-[60%] md:px-4 w-full bg-black_2 p-6 rounded-lg '>
            {detailPosts ? <PostDetail post={detailPosts.content.json} /> : null}
          </div>
          <section className='lg:block lg:w-80 hidden mx-4 relative md:mb-0 mb-8 before:w-full before:!h-1 lg:sticky top-0  p-6  '>
            <div className='flex flex-col justify-center'>
              <CardTitles data={resume} />
            </div>
          </section>
        </section>
        <section className='w-full flex justify-center'>
        <CommentForm/>
        </section>
      </main>
    )
}

export default PostDetails;
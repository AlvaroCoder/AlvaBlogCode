import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getContenPostDetail } from '../utils/fetchDataCMS';
import {CardTitles, PostDetail, PostDetailIntro, SkeletonCard} from './components'
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
        <section className='w-full col-span-full lg:col-span-7 flex md:flex-row flex-col-reverse md:items-start items-center justify-center py-6'>
          <div className='md:w-[60%] w-full bg-black_2 p-6 rounded-lg '>
            {detailPosts ? <PostDetail post={detailPosts.content.json} /> : null}
          </div>
          <section className='mx-4 relative md:mb-0 mb-8 before:w-full before:!h-1 md:sticky top-0  p-6  '>
            <div className='flex flex-col'>
              <CardTitles data={resume} />
            </div>
          </section>
        </section>
      </main>
    )
}

export default PostDetails;
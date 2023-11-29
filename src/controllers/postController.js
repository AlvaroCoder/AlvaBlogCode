import React, { useEffect, useState } from 'react'
import PostView from '../views/postView';
import { getContentPosts } from '../utils/fetchDataCMS';
import { postsAdapter } from '../models/adapters/postAdapter';
import {modelPost} from '../models/postModel'
function PostController() {
    const [dataPosts, setDataPosts] = useState([
       modelPost
    ])
    useEffect(()=>{
        (async ()=>{
            const dataPosts = await getContentPosts();
            const jsonDataPosts = await dataPosts.json();
            const {contentPosts} = postsAdapter(jsonDataPosts) 
            setDataPosts(contentPosts);
        })();
    },[])
  return (
    <div className='w-full min-h-screen bg-black_1'>
        <PostView contentData={dataPosts}/>
    </div>
    )
}

export default PostController;
import React, { useEffect, useState } from 'react'
import PostView from '../views/postView';
import { getContentPosts } from '../utils/fetchDataCMS';
import { postsAdapter } from '../models/adapters/postAdapter';

function PostController() {
    const [dataPosts, setDataPosts] = useState([
        {title : '', description : '', id : '', url : '', img : ''}
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
    <div className='w-full min-h-screen'>
        <PostView contentData={dataPosts}/>
    </div>
    )
}

export default PostController;
import React, { useEffect, useState } from 'react'
import PostView from '../views/postView';
import { getContentPosts } from '../utils/fetchDataCMS';
import { postsAdapter } from '../models/adapters/postAdapter';
import {modelPost} from '../models/postModel'
function PostController() {
    const [dataPosts, setDataPosts] = useState([
       modelPost
    ]);
    const [Loading, setLoading] = useState(false);
    useEffect(()=>{
        (async ()=>{
            setLoading(true);
            const dataPosts = await getContentPosts();
            const jsonDataPosts = await dataPosts.json();
            const {contentPosts} = postsAdapter(jsonDataPosts) 
            setDataPosts(contentPosts);
            setLoading(false);
        })();
    },[])
if (Loading) {
    return (
        <div>
            <h1>Cargando</h1>
        </div>
    )
}
return (
    <div className='w-full min-h-screen bg-black_1'>
        <PostView contentData={dataPosts}/>
    </div>
    )
}

export default PostController;
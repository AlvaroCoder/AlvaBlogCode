import React, { useEffect, useState } from 'react'
import PostView from '../views/postView';
import { getContentCategories, getContentPosts } from '../utils/fetchDataCMS';
import { categoriesAdapter, postsAdapter } from '../models/adapters/postAdapter';
import {modelPost} from '../models/postModel'
import { SkeletonCard } from '../views/components';
function PostController() {
    const [dataPosts, setDataPosts] = useState([
       modelPost
    ]);
    const [dataCategories, setDataCategories] = useState([]);
    const [Loading, setLoading] = useState(false);
    useEffect(()=>{
        (async ()=>{
            setLoading(true);
            const dataPosts = await getContentPosts();
            const jsonDataPosts = await dataPosts.json();
            const {contentPosts} = postsAdapter(jsonDataPosts) 
            const dataCategories = await getContentCategories();
            const jsonDataCategories = await dataCategories.json();
            const {message} = jsonDataCategories;
            const adapCategories = categoriesAdapter(message);
            setDataCategories(adapCategories);
            setDataPosts(contentPosts);
            setLoading(false);
        })();
    },[])
if (Loading) {
    return (
        <div className='min-h-screen overflow-hidden bg-black_1 flex justify-center'>
            <div className='overflow-hidden grid grid-cols-1 pb-8 md:grid-cols-2 px-4 py-4 w-full md:w-[80%] gap-2'>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>
                <SkeletonCard/>

            </div>
        </div>
    )
}
return (
    <div className='w-full min-h-screen bg-black_1'>
        <PostView contentData={dataPosts} contentCategories={dataCategories}/>
    </div>
    )
}

export default PostController;
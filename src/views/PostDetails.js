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
    <div>
        {detailPosts ? <PostDetail post={detailPosts} /> : null}
    </div>
  )
}

export default PostDetails;
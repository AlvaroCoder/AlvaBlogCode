import React, { useState } from 'react'
import { PostContentCard } from './components';
import { BannerPrincipal } from './components/elements';

function PostView({
    contentData
}) {
    const [data, setData] = useState(contentData);
    const handleChange=(evt)=>{
        const target = evt.target;
        const query = target.value;
        const newData = contentData.filter((val)=>val.url.toUpperCase().includes(query.toUpperCase())) ;
        setData(newData);
    }
  return (
    <div className='w-full h-full py-4 md:px-8 flex flex-col justify-center '>
        <section className='w-full h-screen'>
        <BannerPrincipal/>
        </section>
        <div className='w-full flex items-center justify-center'>
            <div className='max-w-[80%]'>
                <h1 className='font-serif text-2xl text-title_white font-bold '>Últimos artículos</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8'>
                    {
                        data.map((val,key)=>{
                            return <PostContentCard key={key} dataPosts={val} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostView;
import React, { useState } from 'react'
import { PostContentCard } from './components';

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
    <div className='w-full h-full py-4 md:px-8 flex justify-center '>
        <div className='w-[80%]'>
            <h1 className='font-serif text-2xl text-title_white font-bold '>Últimos artículos</h1>
            {/* <div>
                <input onChange={handleChange} className='w-full  rounded-lg py-2 px-4 my-2 bg-black_2 text-title_white outline-none  ' placeholder='Buscar' />
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8'>
                {
                    data.map((val,key)=>{
                        return <PostContentCard key={key} dataPosts={val} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default PostView;
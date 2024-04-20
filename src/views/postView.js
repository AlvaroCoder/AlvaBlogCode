import React, { useState } from 'react'
import { PostContentCard } from './components';

function PostView({
    contentData=[],
    contentCategories=[]
}) {
    const maxNumPosts = 6;
    const [data, setData] = useState(contentData);

    const [dataCategories, setDataCategories] = useState(contentCategories)
    const handleChangeCategorie=(index, query)=>{
        const newListCategorie=dataCategories.map((val, key)=>{
            if (index===key) {
                return {
                    ...val,
                    selected : true
                }
            }
            return {
                ...val,
                selected : false
            }

        });
        setDataCategories(newListCategorie);
        if (index===0) {
            setData(contentData);
            return;
        }
        const nuevaListaData = contentData.filter(item=>{
            return item.categories.some(categoria=> categoria.name === query)
        })
        setData(nuevaListaData);
    }
  return (
    <div className='w-full h-full py-4 md:px-8 flex flex-col justify-center '>
        <div className='w-full flex items-center justify-center' >
            <section className='w-[80%] py-4 border-y border-y-amarillo  flex flex-row justify-center items-center'>
                {
                    dataCategories.map((val,key)=>(
                        <p onClick={()=>handleChangeCategorie(key, val.name)} className={`text-title_white font-serif text-lg mx-4 p-2   cursor-pointer hover:text-amarillo  ${val.selected && 'text-amarillo'} `}>{val.name}</p>
                    ))
                }
            </section>
        </div>
        <div className=' mt-8 w-full flex items-center justify-center'>
            <div className='max-w-[80%]'>
                <h1 className='font-serif text-2xl text-title_white font-bold '>Últimos artículos</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8'>
                    {
                        data.map((val,key)=>{
                            if (key < maxNumPosts) {
                                return <PostContentCard key={key} dataPosts={val} />
                            }
                            return null
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostView;
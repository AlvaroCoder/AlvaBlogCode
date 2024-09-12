import React, { useState } from 'react'
import { PostContentCard } from './components';
import SearchIcon from '@mui/icons-material/Search';

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
    const handleChangeSearch=(evt)=>{
        const target = evt.target;
        const query= target.value;
        const nuevaListaData = contentData.filter(item=>{
            return item.title.includes(query)
        })
        setData(nuevaListaData);
    }  
  return (
    <div className='w-full h-full py-4 md:px-8 flex flex-col justify-center '>
        <div className='w-full flex flex-col items-center justify-center' >
            <section className='w-[80%] py-2'>
                <h1 className='text-3xl text-title_white font-serif mb-4'>Blog</h1>
                <div className='w-full bg-black_2_opaco border border-slate-700 rounded-xl py-4 px-2 flex flex-row items-center'>
                    <SearchIcon className='text-rojo'/>
                    <input  onChange={handleChangeSearch} className='w-full outline-none bg-transparent text-title_white px-4 font-serif ' placeholder='Buscar...'/>
                </div>
            </section>
            <section className='w-[80%] py-4 border-b border-b-amarillo  flex flex-row justify-center items-center'>
                {/* {
                    dataCategories.map((val,key)=>(
                        <p key={key} onClick={()=>handleChangeCategorie(key, val.name)} className={`text-title_white font-serif text-lg mx-4 p-2   cursor-pointer hover:text-amarillo  ${val.selected && 'text-amarillo'} `}>{val.name}</p>
                    ))
                } */}
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
import React, { useEffect, useState } from 'react'
import { getContentCategories, getContentPosts, getContentsByCategorie } from '../utils/fetchDataCMS';
import { categoriesAdapter, postsAdapter } from '../models/adapters/postAdapter';
import { SkeletonCard } from '../views/components';
import ModelBlog from '../models/Blog/ModelBlog';

function seleccionarAleatorios(lista, n) {
    // Copiar la lista para evitar modificar la original
    const copiaLista = [...lista];
    
    // Array para guardar los elementos seleccionados
    const seleccionados = [];
  
    // Seleccionar n elementos
    for (let i = 0; i < n; i++) {
      // Obtener un índice aleatorio
      const indiceAleatorio = Math.floor(Math.random() * copiaLista.length);
      
      // Extraer el elemento aleatorio y añadirlo a la lista de seleccionados
      seleccionados.push(copiaLista.splice(indiceAleatorio, 1)[0]);
    }
  
    return seleccionados;
  }

export default function ControllerBlog() {
    const [dataPosts, setDataPosts] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const [contentPostTop, setContentPostTop] = useState([]);
    const [mainContentPost, setMainContentPost] = useState({});
    const [Loading, setLoading] = useState(false);
    const [loadingData, setLoadingData] = useState(false);
    useEffect(()=>{
        (async()=>{
            setLoading(true);
            const dataPostsResponse = await getContentPosts();
            const jsonDataPosts = await dataPostsResponse.json();
            const {contentPosts} = postsAdapter(jsonDataPosts);
            const dataCategories = await getContentCategories();
            const jsonDataCategories = await dataCategories.json();
            const {message}=jsonDataCategories;
            const itemsAleatorios = seleccionarAleatorios(contentPosts,3);
            setDataCategories(message);
            setDataPosts(contentPosts);
            setMainContentPost(contentPosts[0]);
            setContentPostTop(itemsAleatorios)
            setLoading(false);
        })();
    },[]);
    const filterDataByCategorie=async(slug)=>{
        setLoadingData(true)
        const response = await getContentsByCategorie(slug);
        
        const jsonDataResponse = await response.json();
        const {contentPosts} = postsAdapter(jsonDataResponse)
        
        setDataPosts(contentPosts)
        setLoadingData(false)
    }
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
        <ModelBlog 
            contentPostsBody={dataPosts} 
            mainContentPost={mainContentPost} 
            topContentPost={contentPostTop}
            dataCategories={dataCategories}
            filterData={filterDataByCategorie}
            loadingData={loadingData}
        />
    )
    
}
;
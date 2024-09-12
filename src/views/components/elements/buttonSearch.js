import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchPanel({changeShowPanel}) {
    const handleEscKey=(evt)=>{
        if (evt.key==="Escape") {
            changeShowPanel()
        }
    }
    return (
        <div className='absolute cursor-default top-0 left-0 flex-1 z-30   '>
            <div className='fixed w-full h-screen flex items-center justify-center bg-black_2_opaco'>
                <div onKeyDown={handleEscKey} className='md:w-[50%] w-[120px] py-4 bg-black_1 shadow-lg border-[1px] border-slate-200 rounded-lg flex flex-col'>
                    <div className='px-4 border-b-2 border-b-slate-200 w-full py-2 flex flex-row items-center'>
                        <SearchIcon className='text-rojo'/>
                        <input placeholder='¿Que estás buscando ?' className='bg-black_1 flex-1 border-none outline-none inset-0 px-3 py-2 text-white' />
                        <div className='border-[1px] rounded-md border-slate-200 px-3 py-1'>
                            <p className='text-white'>esc</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ButtonSearch() {
    const [showSearchPanel, setShowSearchPanel] = useState(false);
    const changeShowPanel = ()=>{
        setShowSearchPanel(!showSearchPanel);
    }
    return (
    <div className=' cursor-pointer rounded-lg md:w-[170px] p-4 flex flex-row  items-center justify-center w-6 h-6 border-[1px] border-slate-600 hover:bg-slate-700 bg-gray-800' >
        <SearchIcon className='text-rojo'/>
        <div className='hidden md:block' onClick={changeShowPanel}>
            <p className='mx-2 text-slate-400'>Buscar...</p>
        </div>
        {
            showSearchPanel ? <SearchPanel changeShowPanel={changeShowPanel} /> : null
        }
    </div>
    )
};
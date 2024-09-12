import React from 'react'
import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from './components';

function Layout() {
  
  return (
    <div >
        <NavBar />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout;
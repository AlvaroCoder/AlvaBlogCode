import React from 'react'
import { NavBarBlog } from '../components/Blog'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components'

export default function LayoutBlog() {
  return (
    <div>
        <NavBarBlog/>
        <Outlet/>
        <Footer/>
    </div>
)
}
;
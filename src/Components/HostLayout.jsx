import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function HostLayout() {
    const activeStyle={
        "fontWeight":"bold",
        "color":"#161616",
        "textDecoration":"underline"
    }
  return (<>
    <nav className='flex w-full h-[50px] gap-5  items-center '>
        <NavLink end to="." style={({isActive})=>isActive?activeStyle:null}>DashBoard</NavLink>
        <NavLink end to="vans" style={({isActive})=>isActive?activeStyle:null}>Vans</NavLink>
        <NavLink to="Income" style={({isActive})=>isActive?activeStyle:null}>Income</NavLink>
        <NavLink to="Reviews" style={({isActive})=>isActive?activeStyle:null}>Reviews</NavLink>
    </nav>
    <Outlet/>
    </>

  )
}

export default HostLayout
import React from 'react'
import { NavLink } from 'react-router-dom'
function NavBar() {
  const activeStyle={
    "fontWeight":"bold",
    "color":"#161616",
    "textDecoration":"underline"

  }
  return (
    <nav className=' bg-[#EFDCAB] w-full h-[10%]  flex justify-around items-center'>
        <div>
            <h1 className='text-3xl  font-semibold'>#VanLife</h1>
        </div>
        <div className='flex gap-7'>
            <NavLink  to="/"

            style={({isActive})=>isActive?activeStyle:null}>
              Home
            </NavLink>
            <NavLink  to="/Host" style={({isActive})=>isActive?activeStyle:null}  >Host</NavLink>
            <NavLink to="about" style={({isActive})=>isActive?activeStyle:null}>About</NavLink>
            <NavLink to="vans" style={({isActive})=>isActive?activeStyle:null}>Vans</NavLink>
        </div>
        {console.log("nav bar rendered")}
    </nav>
  )
}

export default NavBar
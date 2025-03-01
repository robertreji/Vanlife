import React from 'react'
import { NavLink } from 'react-router-dom'
function VandetailNavbar() {
  return (
    <nav className='flex gap-5 font-bold text-xl'>
        <NavLink to=".">Details</NavLink>
        <NavLink to="price">price</NavLink>
        <NavLink to="photos"> Photo</NavLink>


    </nav>
  )
}

export default VandetailNavbar
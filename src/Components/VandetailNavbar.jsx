import React from 'react'
import { NavLink } from 'react-router-dom'
function VandetailNavbar() {
  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive ? 'bg-[#143126] text-white' : 'bg-[#edf5ef] text-[#295140] hover:bg-[#dbe9e1]'
    }`

  return (
    <nav className='flex flex-wrap gap-3'>
        <NavLink end to="." className={linkClass}>Details</NavLink>
        <NavLink to="price" className={linkClass}>Price</NavLink>
        <NavLink to="photos" className={linkClass}>Photos</NavLink>
    </nav>
  )
}

export default VandetailNavbar
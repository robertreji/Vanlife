import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function HostLayout() {
  const tabClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive ? 'bg-[#143126] text-white' : 'bg-white text-[#295140] hover:bg-[#edf5ef]'
    }`

  return (
    <section className='page-shell py-8'>
      <div className='rounded-[2rem] bg-white/75 p-6 shadow-2xl shadow-[#143126]/8 ring-1 ring-white/50 backdrop-blur-xl'>
        <div className='flex flex-col gap-4 border-b border-[#e3ebe6] pb-6 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8f85]'>Host hub</p>
            <h1 className='mt-2 text-3xl font-black text-[#143126]'>Manage vans, guests, and booking insights.</h1>
          </div>
          <nav className='flex flex-wrap gap-2'>
            <NavLink end to='.' className={tabClass}>Dashboard</NavLink>
            <NavLink end to='vans' className={tabClass}>Vans</NavLink>
            <NavLink to='Income' className={tabClass}>Income</NavLink>
            <NavLink to='Reviews' className={tabClass}>Reviews</NavLink>
          </nav>
        </div>

        <div className='pt-6'>
          <Outlet/>
        </div>
      </div>
    </section>
  )
}

export default HostLayout
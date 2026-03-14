import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  const navLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-gray-400 text-red-500 shadow-lg shadow-[#143126]/20'
        : 'text-[#244436] hover:bg-white/60 hover:text-[#143126]'
    }`

  return (
    <header className='sticky top-0 z-50 border-b border-white/50 bg-[#fff7ea]/80 backdrop-blur-xl'>
      <nav className='mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#143126] text-xl font-black text-white shadow-lg shadow-[#143126]/20'>
            V
          </div>
          <div>
            <p className='text-xl font-extrabold tracking-tight text-[#143126]'>VanLife</p>
            <p className='text-sm text-[#5c6f65]'>Tourist booking for road-trip stays</p>
          </div>
        </Link>

        <div className='flex flex-wrap items-center gap-2'>
          <NavLink to='/' end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to='/vans' className={navLinkClass}>
            Explore Vans
          </NavLink>
          <NavLink to='/about' className={navLinkClass}>
            Destinations
          </NavLink>
          <NavLink to='/Host' className={navLinkClass}>
            Host Hub
          </NavLink>
          <Link
            to='/login'
            className='ml-0 rounded-full bg-[#f59e0b] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#f59e0b]/25 transition hover:-translate-y-0.5 hover:bg-[#e58d00] md:ml-2'
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
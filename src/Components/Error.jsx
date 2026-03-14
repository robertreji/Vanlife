import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err=useRouteError()
  return (
    <section className='page-shell py-16'>
      <div className='rounded-[2rem] bg-white/80 p-10 text-center shadow-2xl shadow-[#143126]/8 ring-1 ring-white/50'>
        <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[#7d8f85]'>Something went wrong</p>
        <h1 className='mt-3 text-4xl font-black text-[#143126]'>{err?.statusText || 'Unable to load this page'}</h1>
        <p className='mt-4 text-[#52665c]'>{err?.message || 'Please try again in a moment.'}</p>
      </div>
    </section>
  )
}

export default Error
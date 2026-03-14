import React from 'react'

function Income() {
  return (
    <div className='grid gap-6 md:grid-cols-3'>
      <div className='rounded-[1.5rem] bg-[#143126] p-6 text-white'>
        <p className='text-sm uppercase tracking-[0.22em] text-[#d7e5dc]'>This month</p>
        <p className='mt-3 text-4xl font-black'>$12,480</p>
      </div>
      <div className='rounded-[1.5rem] bg-[#edf5ef] p-6 text-[#143126]'>
        <p className='text-sm uppercase tracking-[0.22em] text-[#7d8f85]'>Average stay</p>
        <p className='mt-3 text-4xl font-black'>4.2 nights</p>
      </div>
      <div className='rounded-[1.5rem] bg-[#fff8ec] p-6 text-[#143126]'>
        <p className='text-sm uppercase tracking-[0.22em] text-[#7d8f85]'>Projected season</p>
        <p className='mt-3 text-4xl font-black'>$48k</p>
      </div>
    </div>
  )
}

export default Income
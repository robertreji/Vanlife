import React from 'react'

function VanDetails({imgurl, name, price, type}) {
  const badgeTone = {
    simple: 'bg-[#dcefe4] text-[#1e4a38]',
    rugged: 'bg-[#e7ddcf] text-[#7b4a1d]',
    luxury: 'bg-[#143126] text-white',
  }

  return (
    <article className='group overflow-hidden rounded-[1.75rem] bg-white/80 shadow-xl shadow-[#143126]/8 ring-1 ring-white/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl'>
      <div className='relative aspect-[4/4.4] overflow-hidden'>
        <img className='h-full w-full object-cover transition duration-500 group-hover:scale-105' src={imgurl} alt={name} />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-bold capitalize ${badgeTone[type] || 'bg-[#edf5ef] text-[#295140]'}`}>
          {type}
        </span>
      </div>

      <div className='space-y-3 p-5'>
        <div className='flex items-start justify-between gap-3'>
          <h2 className='text-xl font-extrabold text-[#143126]'>{name}</h2>
          <div className='text-right text-[#295140]'>
            <p className='text-xl font-black'>${price}</p>
            <p className='text-sm text-[#6d7f76]'>per night</p>
          </div>
        </div>

        <div className='flex items-center justify-between text-sm text-[#6d7f76]'>
          <span>Road-trip ready</span>
          <span className='font-semibold text-[#f59e0b]'>View details →</span>
        </div>
      </div>
    </article>
  )
}

export default VanDetails
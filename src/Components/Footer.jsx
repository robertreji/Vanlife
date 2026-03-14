import React from 'react'

function Footer() {
  return (
    <footer className='border-t border-white/40 bg-[#123024] px-6 py-6 text-[#f8f3e8]'>
      <div className='mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-lg font-bold tracking-wide'>VanLife Tourist Booking</p>
          <p className='text-[#d8e6dc]'>Curated campervan stays for scenic escapes, coastlines, and mountain roads.</p>
        </div>
        <p className='font-medium text-[#e7efe9]'>© 2026 VanLife. Plan less. Wander more.</p>
      </div>
    </footer>
  )
}

export default Footer
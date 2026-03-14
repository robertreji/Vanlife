import React from 'react'
function DashBoard() {
  const metrics = [
    { label: 'Booked nights', value: '184' },
    { label: 'Occupancy rate', value: '78%' },
    { label: 'Guest rating', value: '4.9/5' },
  ]

  return (
    <div className='grid gap-6'>
      <div className='grid gap-4 md:grid-cols-3'>
        {metrics.map((metric) => (
          <div key={metric.label} className='rounded-[1.5rem] bg-[#143126] p-6 text-white'>
            <p className='text-sm uppercase tracking-[0.22em] text-[#d7e5dc]'>{metric.label}</p>
            <p className='mt-3 text-4xl font-black'>{metric.value}</p>
          </div>
        ))}
      </div>

      <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='rounded-[1.5rem] bg-[#fff8ec] p-6'>
          <h2 className='text-2xl font-black text-[#143126]'>Seasonal booking trend</h2>
          <p className='mt-3 max-w-2xl text-[#52665c]'>Travelers are favoring 3-5 day scenic escapes with premium interiors and reliable pickup times.</p>
          <div className='mt-6 flex h-48 items-end gap-4'>
            {[45, 65, 58, 84, 72, 96].map((height, index) => (
              <div key={index} className='flex flex-1 flex-col items-center gap-3'>
                <div className='w-full rounded-t-2xl bg-gradient-to-t from-[#143126] to-[#f59e0b]' style={{ height: `${height}%` }} />
                <span className='text-sm font-semibold text-[#6d7f76]'>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-[1.5rem] bg-[#edf5ef] p-6'>
          <h2 className='text-2xl font-black text-[#143126]'>Host focus</h2>
          <ul className='mt-5 space-y-4 text-[#295140]'>
            <li className='rounded-2xl bg-white px-4 py-3 font-medium'>Refresh listing photos for summer destinations</li>
            <li className='rounded-2xl bg-white px-4 py-3 font-medium'>Promote flexible return times on premium vans</li>
            <li className='rounded-2xl bg-white px-4 py-3 font-medium'>Bundle route recommendations into guest messages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
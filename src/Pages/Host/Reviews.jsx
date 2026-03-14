import React from 'react'

function Reviews() {
  return (
    <div className='grid gap-4'>
      {["Seamless pickup and amazing route tips.", "Perfect interior setup for a coastal weekend.", "Clean, stylish, and easy booking from start to finish."].map((review) => (
        <div key={review} className='rounded-[1.5rem] bg-white p-5 shadow-lg shadow-[#143126]/5'>
          <p className='text-lg font-semibold text-[#143126]'>★★★★★</p>
          <p className='mt-2 text-[#52665c]'>{review}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews
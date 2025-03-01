import React from 'react'

function VanDetails({imgurl, name, price, type}) {
  return (
    <div className='rounded-md ml-2 mt-2 w-[200px] h-[380px]  bg-[#F8F3D9]  relative'>
       <div className='w-full h-2/3 flex justify-center items-center'>
          <img className='w-[85%] h-[85%] rounded-2xl' src={imgurl} alt="alt" />
       </div>
       <div className=' flex items-center '>
            <h1 className=' pb-2 text-xl font-bold '>{name}
            </h1>
            <p className='pl-[20px]  pb-2 text-[15px] font-bold'> ${price}</p>
            <button className='absolute bottom-2 rounded-lg font-extrabold text-white text-lg translate-x-1/2 right-[50%] bg-green-500 w-fit p-4 '>{type}</button>
       </div>
    </div>
  )
}

export default VanDetails
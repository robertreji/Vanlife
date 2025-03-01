import React from 'react'

function Main() {
  return (
  <>
    <div className="relative bg-[url('/images/bg.jpg')]  bg-center bg-cover w-full h-full ">  
     
    <div className='relative  bg-[#1a140e] opacity-30 w-full h-full'></div>
    <div className='absolute top-0 w-full flex items-center h-[90%]'>
        <div className='pl-[50px] w-1/2'>
            <h1 className=' pb-[20px] text-5xl text-white font-semibold font-serif'>You Got the travel Plans ,We <br /> got the Travel vans</h1>
           
            <p className='text-white opacity-80'>Add atventure to your lifeby joining the #VanLife movement <br />Rent the perfect van for your perfect road trip</p>
            <button className='mt-[50px] bg-[#D98324] w-[40%] rounded-2xl px-6 py-5 font-serif text-3xl font-bold text-white'>Find your van</button>
        </div>
       
    </div>
    </div>
  </>
  )
}

export default Main
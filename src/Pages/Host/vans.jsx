import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../Api'
export function loader()
{
    return getHostVans()
}
function HostedVansList({imageUrl,name, price, })
{
    return(
        <div className='rounded-md ml-8 mt-5 flex w-[500px] h-[150px] bg-gray-200  gap-3'>
            <div>
                <img className='w-[150px] h-[150px]' src={imageUrl} alt="img" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-extrabold '>{name}</h1>
                <p className=' font-semibold font-serif'>$ {price}/day</p>
            </div>
        </div>
    )
}
function Hostvans() {
    
const vans=useLoaderData()


  return (<>
  <div className='pt-5 w-full h-screen overflow-hidden'>
    <h1 className=' text-5xl font-bold font-serif'>Your Listed  Vans </h1>
    <div className='w-full h-[600px] grid grid-cols-3 gap-2 flex-col  overflow-x-hidden overflow-y-scroll  '>
        {vans.map((van)=>(
            <Link to={`/Host/vans/${van.id}`}>
                <HostedVansList imageUrl={van.imageUrl} name={van.name} price={van.price}/>
            </Link>
            ))
        }
        {vans.map((van)=>(
            <Link to={`/Host/vans/${van.id}`}>
                <HostedVansList imageUrl={van.imageUrl} name={van.name} price={van.price}/>
            </Link>
            ))
        }
    </div>
  </div>
    
</>
  )
}

export default Hostvans
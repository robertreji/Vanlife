import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../Api'
export function loader()
{
    return getHostVans()
}
function HostedVansList({imageUrl,name, price, type})
{
    return(
        <div className='flex h-full gap-4 rounded-[1.5rem] bg-white p-4 shadow-lg shadow-[#143126]/5 transition hover:-translate-y-1'>
            <div className='overflow-hidden rounded-[1.25rem]'>
                <img className='h-28 w-28 object-cover' src={imageUrl} alt={name} />
            </div>
            <div className='flex flex-1 flex-col justify-center'>
                <span className='w-fit rounded-full bg-[#edf5ef] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#295140]'>{type}</span>
                <h1 className='mt-3 text-2xl font-extrabold text-[#143126]'>{name}</h1>
                <p className='mt-1 font-semibold text-[#52665c]'>$ {price}/night</p>
            </div>
        </div>
    )
}
function Hostvans() {
    
const vans=useLoaderData()


  return (<>
  <div className='w-full'>
    <div className='flex flex-col gap-2'>
      <h1 className='text-4xl font-black text-[#143126]'>Your listed vans</h1>
      <p className='text-[#52665c]'>A themed overview of active vehicles ready for tourist bookings.</p>
    </div>
    <div className='mt-8 grid gap-5 lg:grid-cols-2'>
        {vans.map((van)=>(
            <Link key={van.id} to={`/Host/vans/${van.id}`}>
                <HostedVansList imageUrl={van.imageUrl} name={van.name} price={van.price} type={van.type}/>
            </Link>
            ))
        }
    </div>
  </div>
    
</>
  )
}

export default Hostvans

import { Link, useLoaderData } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import VandetailNavbar from './VandetailNavbar'
import { getHostVans } from '../Api'

export async function loader({params})
{
  const vans= await getHostVans(params.id)
  console.log("van data :",vans)
 return vans
}

function HostVanDetail() {
     const van=useLoaderData()
     const selectedVan = van[0]
   
  return (
        <div className='w-full'>
                <div className='rounded-[1.75rem] bg-[#fff8ec] p-6'>
                        <Link to=".." relative="path" className='inline-flex items-center gap-2 text-sm font-bold text-[#295140]'>
                            <span>←</span>
                            <span>Back to all vans</span>
                        </Link>
                        <div className='mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
                                <div className='overflow-hidden rounded-[1.75rem] bg-white'>
                                        <img className='h-full min-h-[280px] w-full object-cover' src={`${selectedVan.imageUrl}`} alt={selectedVan.name} />
                </div>
                                <div className='flex flex-col justify-center'>
                                        <span className='w-fit rounded-full bg-[#143126] px-4 py-2 text-sm font-bold capitalize text-white'>{selectedVan.type}</span>
                                        <h1 className='mt-4 text-4xl font-black text-[#143126]'>{selectedVan.name}</h1>
                                        <p className='mt-2 text-xl font-semibold text-[#52665c]'>$ {selectedVan.price}/night</p>
                                        <p className='mt-4 max-w-xl text-[#52665c]'>{selectedVan.description}</p>
                </div>
            </div>
                        <div className='mt-8'>
                            <VandetailNavbar/>
                            <div className='mt-5 rounded-[1.5rem] bg-white p-5'>
                                <Outlet context={selectedVan}/>
                            </div>
                        </div>
        </div>
    </div>
  )
}

export default HostVanDetail
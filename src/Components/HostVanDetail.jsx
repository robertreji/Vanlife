
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
   
  return (
    <div className='w-full h-full flex justify-center '>
        <div className='  ml-5 bg-gray-200  w-[60%] h-[75%]'>
            <Link to=".." relative="path"><i><h1  className='text-gray-700 mt-10 pl-10 underline'>Back to all vans</h1></i></Link>
            <div className='w-full flex  h-[300px]'>
                <div className='w-1/2 flex justify-center items-center'>
                    <img className='w-[250px] h-[250px]' src={`${van[0].imageUrl}`} alt="img" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-md font-extrabold p-[10px] bg-green-500 rounded-md'>{van[0].type}</h1>
                        <h1 className='text-2xl font-extrabold '>{van[0].name}</h1>
                        <p className=' font-semibold font-serif text-xl'>$ {van[0].price}/day</p>
                </div>
            </div>
            <VandetailNavbar/>
            <Outlet context={van[0]}/>
        </div>
    </div>
  )
}

export default HostVanDetail
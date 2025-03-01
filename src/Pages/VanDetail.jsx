import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { FetchVanData } from '../Api'
import { Link ,useLocation} from 'react-router-dom'
export function loader({params})
{
 return FetchVanData(params.id)
}

function VanDetail() {

  const location=useLocation()
  console.log(location)
  const vanDetail =useLoaderData()


const search=location.state.search===null || location.state.search===""?null:location.state.search
const type=location.state?.type ||"all"  

return (

     <div className=' flex-grow flex flex-col w-full h-[90%] bg-[#B9B28A]  '>
              <Link to={`..${search}`}relative='path' ><i><h1  className='text-white mt-10 pl-10 underline'>Back to {type} vans</h1></i></Link>

        <div className='w-full h-1/2 flex-grow flex justify-center '>
            <img className='w-[30%] h-[80%] mt-5 rounded-2xl' src={vanDetail.imageUrl} alt="alt" />
        </div>
        <div className=' flex flex-grow flex-col h-full items-center '>
            <h1 className='text-white  pb-2 text-5xl font-bold '>{vanDetail.name}
            </h1>
            <p className='pl-[20px] text-4xl  pb-2 text-green-900 font-bold'> ${vanDetail.price}</p>
            <p className='w-[700px]  text-gray-200 text-wrap'>{vanDetail.description}</p>
            <button className=' bottom-2 rounded-lg font-extrabold text-lg translate-x-1/2 right-[50%] mt-5 bg-green-500 w-fit p-4 text-white'>{vanDetail.type}</button>
        </div>
 </div>
)
   
  
}

export default VanDetail
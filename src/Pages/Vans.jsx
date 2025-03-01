import React, { useState } from 'react'
import { useEffect } from 'react'
import {VanDetails} from '../Components'
import { Link ,useSearchParams,useLoaderData, data} from 'react-router-dom'
import{ FetchVanData} from '../Api'

export function loader()
{
  return FetchVanData()  
}

function Vans() {
const vans=useLoaderData()
const [searchParams,setsearchParams]=useSearchParams()
const typeFilter=searchParams.get(null)
console.log("van section rendered ")

const displayedVans=typeFilter?vans.filter((van)=>van.type.toLocaleLowerCase()===typeFilter):vans
function handleFilterChange(key,value)
{
  setsearchParams(prevParams=> 
    {
      if(value===null)
      {
        prevParams.delete(key)
      }else
      {
        prevParams.set(key,value)
      }
      return prevParams
    })
  
  
 
}
return (
  <div className="w-screen h-screen flex overflow-hidden">
    <div className=" relative w-1/4 h-full bg-[#F8F3D9] flex justify-center items-center">
   
      <h1 className="text-6xl py-6 font-extrabold text-center">
        <div className=' absolute flex-col flex top-10 text-2xl mb-[500px]'>
          
        <p>fileter by type:</p>
        <button  style={typeFilter==="simple"?{color:"red"}:null}
        onClick={()=>handleFilterChange("type","simple")}>simple</button>
        <button style={typeFilter==="luxury"?{color:"red"}:null} onClick={()=>handleFilterChange("type","luxury")}>Luxury</button>
        <button style={typeFilter===""?{color:"red"}:null} onClick={()=>handleFilterChange("type","rugged")}>  Rugged</button>
        {typeFilter?<button onClick={()=>handleFilterChange("type",null)}>Clear....</button>:null}


        </div>
        Explore our van options
      </h1>
     
    </div>
   

    
    <div className="flex-grow h-full bg-[#B9B28A] overflow-y-auto">
      <div className="grid grid-cols-5 gap-4 p-4">
        {vans.length > 0
          ? displayedVans.map((van) => (
              <Link to={van.id} state={{
                search:`?${searchParams.toString()}`,
              type:`${typeFilter}`
              }} key={van.id}>
                <VanDetails
                  imgurl={van.imageUrl}
                  name={van.name}
                  price={van.price}
                  type={van.type}
                />
              </Link>
            ))
          : null}
      </div>
    </div>
  </div>
);


}

export default Vans
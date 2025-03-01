import { useOutletContext } from "react-router-dom"
function HostVanprice() {

    const van=useOutletContext()

  return (
    <h1 className='text-xl font-serif  mt-6 w-[500px] ml-5'>${van.price}/day</h1>
  )
}

export default HostVanprice

import { useOutletContext } from "react-router-dom"

function HostvanPhoto() {
  const van=useOutletContext()
  return (
    <>
        <img className='text-xl font-serif  mt-6 w-[200px] h-[200px] ml-5' src={van.imageUrl} alt="img" />
    </>
  )
}

export default HostvanPhoto
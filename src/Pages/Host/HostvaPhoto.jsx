
import { useOutletContext } from "react-router-dom"

function HostvanPhoto() {
  const van=useOutletContext()
  return (
    <div className='overflow-hidden rounded-[1.5rem] bg-[#fff8ec] p-4'>
        <img className='h-64 w-full rounded-[1.25rem] object-cover' src={van.imageUrl} alt={van.name} />
    </div>
  )
}

export default HostvanPhoto
import { useOutletContext } from "react-router-dom"
function Hostvandetails() {
const van=useOutletContext()
  return (
    <div className='grid gap-4 text-[#295140]'>
      <p className='text-lg leading-8'>{van.description}</p>
      <div className='rounded-2xl bg-[#fff8ec] p-4'>
        <p className='text-sm uppercase tracking-[0.2em] text-[#7d8f85]'>Host note</p>
        <p className='mt-2 font-medium'>Highlight scenic stops and quick-start amenities to improve tourist conversion.</p>
      </div>
    </div>
  )
}

export default Hostvandetails
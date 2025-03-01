import { useOutletContext } from "react-router-dom"
function Hostvandetails() {
const van=useOutletContext()
  return (
    <p className='text-xl font-serif  mt-6 w-[500px] ml-5'>{van.description}</p>
  )
}

export default Hostvandetails
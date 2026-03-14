import { useOutletContext } from "react-router-dom"
function HostVanprice() {

    const van=useOutletContext()

  return (
    <div className='rounded-2xl bg-[#edf5ef] p-5 text-[#143126]'>
      <p className='text-sm uppercase tracking-[0.2em] text-[#7d8f85]'>Nightly rate</p>
      <h1 className='mt-3 text-4xl font-black'>${van.price}<span className='text-lg font-semibold text-[#52665c]'> / night</span></h1>
    </div>
  )
}

export default HostVanprice
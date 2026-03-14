import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FetchVanData } from '../Api'
import { Link ,useLocation} from 'react-router-dom'
export function loader({params})
{
 return FetchVanData(params.id)
}

function VanDetail() {

  const location = useLocation()
  const vanDetail = useLoaderData()

  const search = location.state?.search || ''
  const type = location.state?.type || 'all'

  const badgeTone = {
    simple: 'bg-[#dcefe4] text-[#1e4a38]',
    rugged: 'bg-[#e7ddcf] text-[#7b4a1d]',
    luxury: 'bg-[#143126] text-white',
  }

  return (
    <section className='page-shell py-10'>
      <div className='rounded-[2rem] bg-white/80 p-6 shadow-2xl shadow-[#143126]/8 ring-1 ring-white/50 md:p-8'>
        <Link to={`..${search}`} relative='path' className='inline-flex items-center gap-2 text-sm font-bold text-[#295140] transition hover:text-[#143126]'>
          <span>←</span>
          <span>Back to {type} vans</span>
        </Link>

        <div className='mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start'>
          <div className='overflow-hidden rounded-[2rem] bg-[#f6f0e6]'>
            <img className='h-full max-h-[520px] w-full object-cover' src={vanDetail.imageUrl} alt={vanDetail.name} />
          </div>

          <div className='space-y-6'>
            <span className={`inline-flex rounded-full px-4 py-2 text-sm font-bold capitalize ${badgeTone[vanDetail.type] || 'bg-[#edf5ef] text-[#295140]'}`}>
              {vanDetail.type}
            </span>
            <div>
              <h1 className='text-4xl font-black text-[#143126] md:text-5xl'>{vanDetail.name}</h1>
              <p className='mt-3 text-3xl font-black text-[#f59e0b]'>${vanDetail.price}<span className='text-lg font-semibold text-[#52665c]'> / night</span></p>
            </div>

            <p className='text-lg leading-8 text-[#52665c]'>{vanDetail.description}</p>

            <div className='grid gap-4 rounded-[1.75rem] bg-[#143126] p-6 text-white md:grid-cols-3'>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-[#dce6df]'>Best for</p>
                <p className='mt-2 font-bold'>Scenic road trips</p>
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-[#dce6df]'>Stay style</p>
                <p className='mt-2 font-bold'>Flexible pickup</p>
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-[#dce6df]'>Booking</p>
                <p className='mt-2 font-bold'>Instant request</p>
              </div>
            </div>

            <div className='rounded-[1.75rem] bg-[#fff8ec] p-6'>
              <h2 className='text-xl font-black text-[#143126]'>Ready to travel?</h2>
              <p className='mt-2 text-[#52665c]'>Secure this van for your next tourist getaway and confirm your booking in minutes.</p>
              <Link to='/login' className='mt-5 inline-flex rounded-full bg-[#f59e0b] px-6 py-3 font-bold text-white transition hover:bg-[#e08d09]'>
                Continue to booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
   
  
}

export default VanDetail
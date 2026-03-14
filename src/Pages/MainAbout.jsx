import React from 'react'
import { Link } from 'react-router-dom'
function MainAbout() {
  const benefits = [
    'Handpicked vans for tourism-focused comfort and storage',
    'Flexible pickup windows for sunrise departures and weekend returns',
    'Local destination tips from hosts who know the route best',
  ]

  return (
    <section className='page-shell py-12 md:py-16'>
      <div className='grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#143126]/10">
          <div className="absolute inset-0 bg-[url('/images/van.jpg')] bg-cover bg-center" />
          <div className='absolute inset-0 bg-gradient-to-t from-[#10291f]/80 via-[#10291f]/25 to-transparent' />
          <div className='absolute bottom-0 p-8 text-white'>
            <p className='text-sm uppercase tracking-[0.28em] text-[#f7d694]'>Why travelers choose us</p>
            <h2 className='mt-3 text-3xl font-black'>Designed for tourists, not just transport.</h2>
          </div>
        </div>

        <div className='rounded-[2rem] bg-white/75 p-8 shadow-2xl shadow-[#143126]/8 ring-1 ring-white/50 backdrop-blur-xl md:p-10'>
          <span className='rounded-full bg-[#edf5ef] px-4 py-2 text-sm font-bold text-[#295140]'>About the experience</span>
          <h1 className='section-title mt-5 text-[#143126]'>From coastal getaways to mountain loops, the van becomes part of the trip.</h1>
          <p className='mt-5 text-lg leading-8 text-[#52665c]'>
            VanLife helps tourists book memorable stays on wheels with thoughtfully equipped vans, reliable hosts, and a
            visual-first booking flow made for dreamers and planners alike.
          </p>

          <div className='mt-8 grid gap-4'>
            {benefits.map((benefit) => (
              <div key={benefit} className='flex items-start gap-3 rounded-2xl bg-[#fff8ec] p-4'>
                <span className='mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#143126] text-sm font-black text-white'>
                  ✓
                </span>
                <p className='font-medium text-[#254236]'>{benefit}</p>
              </div>
            ))}
          </div>

          <div className='mt-8 rounded-[1.75rem] bg-[#143126] p-6 text-white'>
            <p className='text-sm uppercase tracking-[0.22em] text-[#dbe8e0]'>Next journey</p>
            <p className='mt-2 text-2xl font-bold'>Ready to match your route with the right van?</p>
            <Link
              to='/vans'
              className='mt-5 inline-flex rounded-full bg-[#f59e0b] px-6 py-3 font-bold text-white transition hover:bg-[#e08d09]'
            >
              Browse available vans
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainAbout
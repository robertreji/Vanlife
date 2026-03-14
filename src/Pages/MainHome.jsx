import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  const highlights = [
    { label: 'Curated campervans', value: '120+' },
    { label: 'Scenic routes covered', value: '35' },
    { label: 'Happy road-trippers', value: '4.9/5' },
  ]

  const tripIdeas = ['Coastal sunrise escapes', 'National park weekends', 'Remote work with a view']

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center" />
      <div className='absolute inset-0 bg-gradient-to-r from-[#0c241c]/92 via-[#143126]/72 to-[#143126]/45' />

      <div className='page-shell relative py-16 md:py-20 lg:py-24'>
        <div className='grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]'>
          <div className='max-w-3xl text-white'>
            <span className='inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#fbe7bb]'>
              Modern van tourist booking theme
            </span>
            <h1 className='section-title text-balance mt-6 text-white'>
              Book a scenic campervan stay for your next unforgettable road trip.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-[#ebf3ee] md:text-xl'>
              Discover premium vans, flexible pickup points, and route-ready amenities designed for beach mornings,
              mountain sunsets, and slow travel adventures.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <Link
                to='/vans'
                className='rounded-full bg-[#f59e0b] px-7 py-3.5 text-base font-bold text-white shadow-2xl shadow-[#f59e0b]/25 transition hover:-translate-y-0.5 hover:bg-[#e18d08]'
              >
                Explore vans
              </Link>
              <Link
                to='/about'
                className='rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/15'
              >
                View travel inspiration
              </Link>
            </div>

            <div className='mt-10 flex flex-wrap gap-3'>
              {tripIdeas.map((idea) => (
                <span key={idea} className='rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#f5f7f6]'>
                  {idea}
                </span>
              ))}
            </div>
          </div>

          <div className='glass-card rounded-[2rem] p-6 text-[#143126]'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#6d7f76]'>Featured escape</p>
            <h2 className='mt-3 text-3xl font-extrabold'>Pacific Coast Wanderer</h2>
            <p className='mt-3 text-[#52665c]'>
              Ocean-view pickup, solar-ready interior, and space for long weekends under the stars.
            </p>

            <div className='mt-6 space-y-4'>
              <div className='rounded-3xl bg-[#fff8ec] p-4'>
                <p className='text-sm text-[#6d7f76]'>Best for</p>
                <p className='mt-1 text-lg font-bold'>2-4 travelers · surf weekends · flexible stays</p>
              </div>
              <div className='rounded-3xl bg-[#edf5ef] p-4'>
                <p className='text-sm text-[#6d7f76]'>Popular routes</p>
                <p className='mt-1 text-lg font-bold'>Big Sur, Lake Tahoe, Yosemite loop</p>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-between rounded-3xl bg-[#143126] px-5 py-4 text-white'>
              <div>
                <p className='text-sm text-[#d6e6dc]'>Starting from</p>
                <p className='text-3xl font-black'>$120<span className='text-base font-medium'>/night</span></p>
              </div>
              <Link to='/vans' className='rounded-full bg-white px-5 py-2.5 font-bold text-[#143126]'>
                Reserve
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          {highlights.map((item) => (
            <div key={item.label} className='glass-card rounded-3xl p-5 text-white'>
              <p className='text-3xl font-black'>{item.value}</p>
              <p className='mt-2 text-[#e2ece7]'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Main
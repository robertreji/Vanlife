import React from 'react'
import {VanDetails} from '../Components'
import { Link ,useSearchParams,useLoaderData } from 'react-router-dom'
import{ FetchVanData} from '../Api'

export function loader()
{
  return FetchVanData()  
}

function Vans() {
  const vans = useLoaderData()
  const [searchParams, setsearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans

  function handleFilterChange(key, value) {
    setsearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }

      return prevParams
    })
  }

  const filterButtonClass = (value) =>
    `rounded-full px-4 py-2 text-sm font-bold capitalize transition ${
      typeFilter === value
        ? 'bg-[#143126] text-white shadow-lg shadow-[#143126]/20'
        : 'bg-white text-[#295140] hover:bg-[#edf5ef]'
    }`

  return (
    <section className='page-shell py-10 md:py-14'>
      <div className='rounded-[2rem] bg-gradient-to-br from-[#fff7ea] via-white to-[#edf5ef] p-6 shadow-2xl shadow-[#143126]/8 md:p-8'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-[#7d8f85]'>Browse stays</p>
            <h1 className='mt-3 text-4xl font-black text-[#143126] md:text-5xl'>Find the right van for your tourist adventure.</h1>
            <p className='mt-4 text-lg text-[#52665c]'>
              Compare flexible stays, rugged escapes, and elevated luxury campervan experiences in one clean booking view.
            </p>
          </div>

          <div className='glass-card rounded-[1.5rem] px-5 py-4 text-[#295140]'>
            <p className='text-sm text-[#6d7f76]'>Showing</p>
            <p className='text-3xl font-black'>{displayedVans.length}</p>
            <p className='text-sm text-[#6d7f76]'>available vans</p>
          </div>
        </div>

        <div className='mt-8 flex flex-wrap items-center gap-3'>
          <span className='text-sm font-semibold uppercase tracking-[0.2em] text-[#6d7f76]'>Filter by type</span>
          <button className={filterButtonClass('simple')} onClick={() => handleFilterChange('type', 'simple')}>Simple</button>
          <button className={filterButtonClass('luxury')} onClick={() => handleFilterChange('type', 'luxury')}>Luxury</button>
          <button className={filterButtonClass('rugged')} onClick={() => handleFilterChange('type', 'rugged')}>Rugged</button>
          {typeFilter ? (
            <button className='rounded-full border border-[#cbdad1] px-4 py-2 text-sm font-bold text-[#52665c]' onClick={() => handleFilterChange('type', null)}>
              Clear filters
            </button>
          ) : null}
        </div>

        <div className='mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
          {displayedVans.map((van) => (
            <Link
              to={van.id}
              state={{
                search: searchParams.toString() ? `?${searchParams.toString()}` : '',
                type: typeFilter || 'all',
              }}
              key={van.id}
            >
              <VanDetails imgurl={van.imageUrl} name={van.name} price={van.price} type={van.type} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )


}

export default Vans
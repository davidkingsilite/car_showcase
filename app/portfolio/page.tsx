import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='mt-5 mb-10'>
        <h1 className='my-5 font-semibold'>Choose a gallery</h1>
        <div className='flex gap-12'>
          <Link href="/portfolio/illustration" className="relative border-2 border-black rounded h-[400px] w-[300px] hover:text-primary-blue p-2 bg-hero bg-contain bg-no-repeat bg-center ">
            <span className='absolute font-bold text-4xl bottom-2 right-2'>Illustration</span>
          </Link>
          <Link href="/portfolio/application" className='relative border-2 border-black rounded h-[400px] w-[300px] hover:text-primary-blue p-2 bg-hero bg-cover'>
            <span className='absolute font-bold text-4xl bottom-2 right-2'>Application</span>
          </Link>
          <Link href="/portfolio/works" className='relative border-2 border-black rounded h-[400px] w-[300px] hover:text-primary-blue p-2 bg-hero bg-cover'>
            <span className='absolute font-bold text-4xl bottom-2 right-2'>Works</span>
          </Link>
        </div>
    </div>
  )
}

export default Portfolio
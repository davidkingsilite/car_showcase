import React from 'react'
import { CustomButton } from '@/components'
import Image from 'next/image'

const Category = ({params}:any) => {
    console.log(params.category)
  return (
    <div className='relative top-20'>
      <h1 className=''>{params.category}</h1>
      <div className='flex gap-12 mt-12 mb-24'>
        <div className='flex-1 flex gap-5 flex-col'>
          <h1 className=''>test</h1>
          <p className=''>description</p>
          <CustomButton url='/' title='See More' />
        </div>
        <div className='flex-1 h-[500px] relative'>
          <Image
             src="/hero.png"
             fill
             alt="car image"
          />
        </div>
      </div>
    </div>
  )
}

export default Category
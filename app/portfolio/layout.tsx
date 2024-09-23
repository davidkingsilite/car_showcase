import React from 'react'


const layout = ({children,}:{children: React.ReactNode}) => {
  return (
    <div className='h-screen flex flex-col justify-between mx-auto my-0 px-[60px] py-0'>
        <h1 className='relative text-[40px] top-12 mt-5'>OUR WORK</h1>
        {children}
    </div>
  )
}

export default layout
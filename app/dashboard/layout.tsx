import React from 'react'


const layout = ({children,}:{children: React.ReactNode}) => {
  return (
    <div className='relative h-screen text-center flex flex-col items-center justify-center'>
        {children}
    </div>
  )
}

export default layout
import React from 'react'
import homebg from '../../assets/images/comingbg.webp'
const index = () => {
  return (
    <div className='bg-black-800 pt-7 pb-28 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${homebg})` }}>
            <div className='max-w-[694px] text-center px-4 lg:px-0 mt-24 pb-6 mx-auto grid grid-cols-1'>
                <span className='mb-3 font-Bai-Jamjuree uppercase tracking-widest'>PATCH NOTES</span>
                <h1 className='text-5xl  font-medium capitalize leading-[64px] font-Ringbearer'>
                Find the latest patch notes &
                <span className='Thrones'> releases here  </span>  
                </h1>
            </div>
            <div className='max-w-[1097px] text-center px-4 lg:px-0 mt-24 pb-6 mx-auto'>
                <h2 className='font-semibold text-8xl capitalize font-Ringbearer comingsoon pt-6'>COMING SOON</h2>
            </div>
        </div>
  )
}

export default index

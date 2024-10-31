import React from 'react'
import homebg from '../../assets/images/Devblog.webp'
import Timeline from './Timeline'

const Roadmap = () => {
    return (
        <div className='bg-black-800 pt-7 pb-28 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${homebg})` }}>
            <div className='max-w-[1320px] text-center px-4 lg:px-0 mt-24 pb-6 mx-auto grid grid-cols-1'>
                <span className='mb-3 font-Bai-Jamjuree uppercase tracking-widest'>Find Out Our ROADMAP</span>
                <h1 className='text-5xl  font-medium capitalize leading-[64px] font-Ringbearer'>
                     ROADMAP OF  <span className='Thrones'> THRONES </span>  OF AGES
                </h1>
            </div>
            <Timeline />
        </div>
    )
}

export default Roadmap

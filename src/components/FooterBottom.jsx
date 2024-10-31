import React from 'react'

import footerdown from '../assets/images/new.svg';


const FooterBottom = () => {
    return (
        <div className=' max-w-[1320px] flex flex-col gap-2 mt-11 container mx-auto py-6 relative'>
            <p className='text-center md:mr-5 sm:mr-3 mr-0'> SCROLL TO EXPLORE </p>
            <div className=' '>
                <img src={footerdown} alt='not found' />
            </div>

        </div>
    )
}

export default FooterBottom

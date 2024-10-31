import React from 'react'
import login from '../../assets/images/loginbg.webp'

import footerdown from '../../assets/images/new.svg';

const index = () => {
  return (
    <>
      <div className='bg-black-800 pt-24 pb-5 px-3 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${login})` }}>

        <div className='max-w-[624px] mt-8 p-6 bg-[#FFFFFF1A]  rounded-3xl mx-auto'>
          <h1 className='text-3xl  font-medium capitalize  font-Ringbearer'>
            Pre Register!
          </h1>
          <form className='w-full flex flex-col gap-5 mt-6'>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='FullName' className='text-xl font-semibold font-Bai-Jamjuree'>Full Name</label>
              <input type='text' className='border bg-transparent focus:outline-blue-50 px-5 py-3 text-white border-white rounded-xl backdrop-blur-md' placeholder='Enter Full Name' id='FullName' name='FullName' required />
            </div>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='CryptoWallet' className='text-xl font-semibold font-Bai-Jamjuree'>CryptoWallet</label>
              <input type='text' className='border bg-transparent focus:outline-blue-50 px-5 py-3 text-white border-white rounded-xl backdrop-blur-md' placeholder='Enter Crypto Wallet' id='CryptoWallet' name='CryptoWallet' required />
            </div>
            <div className='flex flex-col space-y-5'>
              <label htmlFor='email' className='text-xl font-semibold font-Bai-Jamjuree'>Email</label>
              <input type='email' className='border bg-transparent focus:outline-blue-50 px-5 py-3 text-white border-white rounded-xl backdrop-blur-md' placeholder='Enter Email Address' id='email' name='email' required />
            </div>
            <div>
              <button className='bg-[#F7F6DA] w-full font-Ringbearer text-base font-medium transition-all hover:scale-105 rounded-xl p-5 text-[#213D6A]'> Pre Register Now </button>
            </div>
          </form>
        </div>


        <div className=' max-w-[1320px] flex flex-col gap-2 mt-16 container mx-auto my-6 relative'>
          <p className='text-center md:mr-5 sm:mr-3 mr-0'> SCROLL TO EXPLORE </p>
          <div className=' '>
            <img src={footerdown} alt='not found' />
          </div>
        
        </div>

      </div>

    </>
  )
}

export default index

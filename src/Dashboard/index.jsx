import React, { useEffect, useRef, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StakingIcon from '../assets/Icons/StakingIcon';
import Market from '../assets/Icons/Market';
import NftIcon from '../assets/Icons/NftIcon';
import BridgeIcon from '../assets/Icons/BridgeIcon';
import dashboardbg from '../assets/images/dashboardbg.webp'
import connectImg from '../assets/images/connectImg.png'
import MaskIcon from '../assets/Icons/MaskIcon';

const index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Function to close the modal when clicking outside of it
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);


  return (
    <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${dashboardbg})` }}>
      <div className="max-w-[1320px]  px-3 mx-auto pb-14 pt-36" >
        <div className="">
          <Tabs
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            selectedTabClassName="bg-gradient-to-b from-[#2E1518] to-[#744D3D] outline-none"
            className="flex  md:flex-row gap-4 flex-col">

            <TabList className="flex gap-4 lg:w-1/5 md:w-1/4 w-full  flex-col">
              <div className="p-7 rounded-3xl text-center  font-Bai-Jamjuree text-base font-semibold  bg-gradient-to-r from-[#2E1518] to-[#744D3D] backdrop-filter-[11px] w-full cursor-pointer text-white">
                CONNECT  YOUR  WALLET
              </div>
              <div className='rounded-3xl overflow-hidden  bg-gradient-to-r from-[#2E1518] to-[#744D3D] backdrop-filter-[11px]'>
                <Tab className="flex items-center gap-2 p-5  w-full cursor-pointer font-Bai-Jamjuree text-base font-semibold ">
                  <StakingIcon fill={selectedIndex === 0 ? '#E88AD3' : '#A36841'} /> STAKING
                </Tab>
                <Tab className="flex items-center gap-2 p-5 cursor-pointer font-Bai-Jamjuree text-base font-semibold  ">
                  <Market fill={selectedIndex === 1 ? '#E88AD3' : '#A36841'} /> MARKET PLACE
                </Tab>
                <Tab className=" flex items-center gap-2 p-5 cursor-pointer font-Bai-Jamjuree text-base font-semibold  ">
                  <NftIcon fill={selectedIndex === 2 ? '#E88AD3' : '#A36841'} /> NFT VIEWER
                </Tab>
                <Tab className="  flex items-center gap-2 p-5  cursor-pointer font-Bai-Jamjuree text-base font-semibold  ">
                  <BridgeIcon fill={selectedIndex === 3 ? '#E88AD3' : '#A36841'} /> BRIDGE
                </Tab>
              </div>
            </TabList>

            <div className="lg:w-4/5 md:w-3/4 w-full rounded-3xl overflow-hidden">

              <TabPanel>
                <div className="py-28 flex gap-6 sm:p-8 text-center flex-col items-center justify-center md:h-[676px] h-fit bg-[#09080E]">
                  <h2 className='font-Ringbearer text-3xl font-medium'>MARKET PLACE</h2>
                  <p className='font-Bai-Jamjuree font-semibold text-base'>You must log in with your wallet to access all menus.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="md:px-6 mt-2 lg:px-12 px-4 py-4 font-Ringbearer rounded-full border md:text-lg text-base text-[#213D6A] bg-[#F7F6DA]"
                  >
                    CONNECT  YOUR  WALLET
                  </button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-28 flex gap-6 sm:p-8 text-center flex-col items-center justify-center md:h-[676px] h-fit bg-[#09080E]">
                  <h2 className='font-Ringbearer text-3xl font-medium'>PLEASE <span className='text-[#D8813E]'> LOGIN </span>   WITH  YOUR  WALLET</h2>
                  <p className='font-Bai-Jamjuree font-semibold text-base'>You must log in with your wallet to access all menus.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="md:px-6 mt-2 lg:px-12 px-4 py-4 font-Ringbearer rounded-full border md:text-lg text-base text-[#213D6A] bg-[#F7F6DA]"
                  >
                    CONNECT  YOUR  WALLET
                  </button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-28 flex gap-6 sm:p-8 text-center flex-col items-center justify-center md:h-[676px] h-fit bg-[#09080E]">
                  <h2 className='font-Ringbearer text-3xl font-medium'>PLEASE <span className='text-[#D8813E]'> LOGIN </span>   WITH  YOUR  WALLET</h2>
                  <p className='font-Bai-Jamjuree font-semibold text-base'>You must log in with your wallet to access all menus.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="md:px-6 mt-2 lg:px-12 px-4 py-4 font-Ringbearer rounded-full border md:text-lg text-base text-[#213D6A] bg-[#F7F6DA]"
                  >
                    CONNECT  YOUR  WALLET
                  </button>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="py-28 flex gap-6 sm:p-8 text-center flex-col items-center justify-center md:h-[676px] h-fit bg-[#09080E]">
                  <h2 className='font-Ringbearer text-3xl font-medium'>BRIDGE</h2>
                  <p className='font-Bai-Jamjuree font-semibold text-base'>You must log in with your wallet to access all menus.</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="md:px-6 mt-2 lg:px-12 px-4 py-4 font-Ringbearer rounded-full border md:text-lg text-base text-[#213D6A] bg-[#F7F6DA]"
                  >
                    CONNECT  YOUR  WALLET
                  </button>
                </div>
              </TabPanel>

            </div>

          </Tabs>
        </div>

        {/* Modal Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center backdrop-blur-md justify-center  z-50">
            <div ref={modalRef} className="flex flex-col rounded-xl sm:flex-row gap-6 bg-gradient-to-r from-[#09080E] to-[#090912] backdrop-blur-md   p-6 max-w-3xl">
              <div className='bg-[#121119] flex flex-col justify-center items-center p-5 rounded-xl'>
                <div className='bg-[#09080E] flex justify-center items-center  rounded-xl w-[60px] h-[60px]'>
                  <MaskIcon />
                </div>
                <h3 className="text-xl mt-3 font-medium capitalize">MetaMask</h3>
                <p className="mt-4 font-Bai-Jamjuree text-sm capitalize">CONNECT YOUR METAMASK</p>
              </div>
              <div className='bg-[#121119] flex flex-col justify-center items-center p-5 rounded-xl'>
                <div className='bg-[#09080E] flex justify-center items-center  rounded-xl w-[60px] h-[60px]'>
                  <img src={connectImg} alt="Connect with MetaMask" />
                </div>
                <h3 className="text-lg mt-3 font-bold">MetaMask</h3>
                <p className="mt-4 font-Bai-Jamjuree text-sm capitalize">CONNECT YOUR METAMASK</p>
              </div>


            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default index
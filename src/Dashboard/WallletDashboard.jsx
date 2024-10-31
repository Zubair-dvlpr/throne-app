import React, { useEffect, useRef, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import StakingIcon from '../assets/Icons/StakingIcon';
import Market from '../assets/Icons/Market';
import NftIcon from '../assets/Icons/NftIcon';
import BridgeIcon from '../assets/Icons/BridgeIcon';
import dashboardbg from '../assets/images/dashboardbg.webp'
import TOACOIN from '../assets/images/TOACOIN.png'
import LockIcon from '../assets/Icons/LockIcon';


const WallletDashboard = () => {
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

    const stakingData = [
        {
            title: "TOTAL STAKED TOA",
            amount: "0.00 TOA",
            dollarAmount: "$0.00",
            description: "Total of Users Staking TOA"
        },
        {
            title: "TOTAL STAKED TOA",
            amount: "0.00 TOA",
            dollarAmount: "$0.00",
            description: "Total of Users Staking TOA"
        },
        {
            title: "TOTAL STAKED TOA",
            amount: "0.00 TOA",
            dollarAmount: "$0.00",
            description: "Total of Users Staking TOA"
        }
    ];
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
                            <div className="p-7 rounded-3xl text-center  font-Bai-Jamjuree text-base font-semibold  bg-gradient-to-r from-[#2E1518] to-[#744D3D] backdrop-filter-[11px] w-full  text-white">
                                CONNECT  YOUR  WALLET
                            </div>
                            <div className="p-4 rounded-3xl flex flex-col gap-4 font-Bai-Jamjuree text-base font-semibold  bg-gradient-to-r from-[#2E1518] to-[#744D3D] backdrop-filter-[11px] w-full  text-white">
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-3'>
                                        <span>
                                            <img src={TOACOIN} alt="" />
                                        </span>
                                        <span>TOA</span>
                                    </div>
                                    <div className='text-center'>
                                        <div className='text-[#F7C059]'>0.00</div>
                                        <div>$0.00</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-3'>
                                        <span>
                                            <img src={TOACOIN} alt="" />
                                        </span>
                                        <span>$TOA</span>
                                    </div>
                                    <div className='text-center'>
                                        <div className='text-[#F7C059]'>0.00</div>
                                        <div>$0.00</div>
                                    </div>
                                </div>
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
                                <div className="p-5 grid gap-5 grid-cols-1 rounded-3xl md:grid-cols-5  bg-[#09080E]">
                                    <div className='col-span-2'>
                                        <h2 className='text-[#F7F6DA] text-[26px] font-medium'>Staking Dashboard</h2>
                                        <p className='text-base mt-3 font-Bai-Jamjuree'>Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown</p>
                                    </div>
                                    <div className='col-span-3 flex flex-col gap-3 justify-center'>
                                        <div className='flex bg-[#170F15] backdrop-blur-md rounded-2xl text-base font-Bai-Jamjuree justify-between'>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div className='md:w-[83px] w-16 flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    <LockIcon />
                                                </div>
                                                <div className='flex items-center  gap-2'>
                                                    <img src={TOACOIN} alt="" /> $500
                                                </div>
                                            </div>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div>
                                                    0.0
                                                </div>
                                                <div className='md:px-5 px-3  flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    STAKE NOW
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  bg-[#170F15] rounded-full justify-around'>
                                            <span>5%</span>
                                            <span>25%</span>
                                            <span>50%</span>
                                            <span>75%</span>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                    {stakingData.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-4 py-6 justify-center items-center rounded-[22px] bg-[#09080E]">
                                            <p className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.title}</p>
                                            <h3 className="font-Bai-Jamjuree text-xl font-bold">{data.amount}</h3>
                                            <span className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.dollarAmount}</span>
                                            <p className="font-Bai-Jamjuree text-[#7C7C7C] text-base font-light">{data.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='rounded-[22px] flex flex-col gap-6 bg-[#09080E] mt-4 p-5'>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Default TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                    </div>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Locked TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the  </p>
                                    </div>
                                </div>
                            </TabPanel>


                            <TabPanel>
                                <div className="p-5 grid gap-5 grid-cols-1 rounded-3xl md:grid-cols-5  bg-[#09080E]">
                                    <div className='col-span-2'>
                                        <h2 className='text-[#F7F6DA] text-[26px] font-medium'>MARKET PLACE Dashboard</h2>
                                        <p className='text-base mt-3 font-Bai-Jamjuree'>Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown</p>
                                    </div>
                                    <div className='col-span-3 flex flex-col gap-3 justify-center'>
                                        <div className='flex bg-[#170F15] backdrop-blur-md rounded-2xl text-base font-Bai-Jamjuree justify-between'>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div className='md:w-[83px] w-16 flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    <LockIcon />
                                                </div>
                                                <div className='flex items-center  gap-2'>
                                                    <img src={TOACOIN} alt="" /> $500
                                                </div>
                                            </div>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div>
                                                    0.0
                                                </div>
                                                <div className='md:px-5 px-3  flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    STAKE NOW
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  bg-[#170F15] rounded-full justify-around'>
                                            <span>5%</span>
                                            <span>25%</span>
                                            <span>50%</span>
                                            <span>75%</span>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                    {stakingData.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-4 py-6 justify-center items-center rounded-[22px] bg-[#09080E]">
                                            <p className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.title}</p>
                                            <h3 className="font-Bai-Jamjuree text-xl font-bold">{data.amount}</h3>
                                            <span className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.dollarAmount}</span>
                                            <p className="font-Bai-Jamjuree text-[#7C7C7C] text-base font-light">{data.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='rounded-[22px] flex flex-col gap-6 bg-[#09080E] mt-4 p-5'>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Default TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                    </div>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Locked TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the  </p>
                                    </div>
                                </div>
                            </TabPanel>


                            <TabPanel>
                                <div className="p-5 grid gap-5 grid-cols-1 rounded-3xl md:grid-cols-5  bg-[#09080E]">
                                    <div className='col-span-2'>
                                        <h2 className='text-[#F7F6DA] text-[26px] font-medium NFT VIEWER'>Staking Dashboard</h2>
                                        <p className='text-base mt-3 font-Bai-Jamjuree'>Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown</p>
                                    </div>
                                    <div className='col-span-3 flex flex-col gap-3 justify-center'>
                                        <div className='flex bg-[#170F15] backdrop-blur-md rounded-2xl text-base font-Bai-Jamjuree justify-between'>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div className='md:w-[83px] w-16 flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    <LockIcon />
                                                </div>
                                                <div className='flex items-center  gap-2'>
                                                    <img src={TOACOIN} alt="" /> $500
                                                </div>
                                            </div>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div>
                                                    0.0
                                                </div>
                                                <div className='md:px-5 px-3  flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    STAKE NOW
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  bg-[#170F15] rounded-full justify-around'>
                                            <span>5%</span>
                                            <span>25%</span>
                                            <span>50%</span>
                                            <span>75%</span>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                    {stakingData.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-4 py-6 justify-center items-center rounded-[22px] bg-[#09080E]">
                                            <p className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.title}</p>
                                            <h3 className="font-Bai-Jamjuree text-xl font-bold">{data.amount}</h3>
                                            <span className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.dollarAmount}</span>
                                            <p className="font-Bai-Jamjuree text-[#7C7C7C] text-base font-light">{data.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='rounded-[22px] flex flex-col gap-6 bg-[#09080E] mt-4 p-5'>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Default TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                    </div>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Locked TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the  </p>
                                    </div>
                                </div>
                            </TabPanel>


                            <TabPanel>
                                <div className="p-5 grid gap-5 grid-cols-1 rounded-3xl md:grid-cols-5  bg-[#09080E]">
                                    <div className='col-span-2'>
                                        <h2 className='text-[#F7F6DA] text-[26px] font-medium'>BRIDGE Dashboard</h2>
                                        <p className='text-base mt-3 font-Bai-Jamjuree'>Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown</p>
                                    </div>
                                    <div className='col-span-3 flex flex-col gap-3 justify-center'>
                                        <div className='flex bg-[#170F15] backdrop-blur-md rounded-2xl text-base font-Bai-Jamjuree justify-between'>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div className='md:w-[83px] w-16 flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    <LockIcon />
                                                </div>
                                                <div className='flex items-center  gap-2'>
                                                    <img src={TOACOIN} alt="" /> $500
                                                </div>
                                            </div>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div>
                                                    0.0
                                                </div>
                                                <div className='md:px-5 px-3  flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    STAKE NOW
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  bg-[#170F15] rounded-full justify-around'>
                                            <span>5%</span>
                                            <span>25%</span>
                                            <span>50%</span>
                                            <span>75%</span>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                    {stakingData.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-4 py-6 justify-center items-center rounded-[22px] bg-[#09080E]">
                                            <p className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.title}</p>
                                            <h3 className="font-Bai-Jamjuree text-xl font-bold">{data.amount}</h3>
                                            <span className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.dollarAmount}</span>
                                            <p className="font-Bai-Jamjuree text-[#7C7C7C] text-base font-light">{data.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='rounded-[22px] flex flex-col gap-6 bg-[#09080E] mt-4 p-5'>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Default TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                    </div>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Locked TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the  </p>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="p-5 grid gap-5 grid-cols-1 rounded-3xl md:grid-cols-5  bg-[#09080E]">
                                    <div className='col-span-2'>
                                        <h2 className='text-[#F7F6DA] text-[26px] font-medium'>Staking Dashboard</h2>
                                        <p className='text-base mt-3 font-Bai-Jamjuree'>Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown</p>
                                    </div>
                                    <div className='col-span-3 flex flex-col gap-3 justify-center'>
                                        <div className='flex bg-[#170F15] backdrop-blur-md rounded-2xl text-base font-Bai-Jamjuree justify-between'>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div className='md:w-[83px] w-16 flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    <LockIcon />
                                                </div>
                                                <div className='flex items-center  gap-2'>
                                                    <img src={TOACOIN} alt="" /> $500
                                                </div>
                                            </div>
                                            <div className='flex items-center md:gap-3 gap-1'>
                                                <div>
                                                    0.0
                                                </div>
                                                <div className='md:px-5 px-3  flex justify-center items-center md:h-[70px] h-16 rounded-2xl bg-[#22161F] backdrop-blur-md'>
                                                    STAKE NOW
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  bg-[#170F15] rounded-full justify-around'>
                                            <span>5%</span>
                                            <span>25%</span>
                                            <span>50%</span>
                                            <span>75%</span>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-3 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                                    {stakingData.map((data, index) => (
                                        <div key={index} className="flex flex-col gap-4 py-6 justify-center items-center rounded-[22px] bg-[#09080E]">
                                            <p className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.title}</p>
                                            <h3 className="font-Bai-Jamjuree text-xl font-bold">{data.amount}</h3>
                                            <span className="font-Bai-Jamjuree text-sm text-[#F7F6DA]">{data.dollarAmount}</span>
                                            <p className="font-Bai-Jamjuree text-[#7C7C7C] text-base font-light">{data.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='rounded-[22px] flex flex-col gap-6 bg-[#09080E] mt-4 p-5'>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Default TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                                    </div>
                                    <div>
                                        <h2 className='text-[#F7F6DA] font-Ringbearer text-[26px] font-medium'>Locked TOA APR : 0%</h2>
                                        <p className='font-Bai-Jamjuree mt-3 text-sm text-[#F7F6DA]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                            has been the Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the  </p>
                                    </div>
                                </div>
                            </TabPanel>


                        </div>

                    </Tabs>
                </div>

            </div>
        </div>

    )
}

export default WallletDashboard
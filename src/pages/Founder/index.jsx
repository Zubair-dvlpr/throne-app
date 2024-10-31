import React from 'react'
import homebg from '../../assets/images/founder.webp'
import Thorns from '../../assets/images/ThornsNFTFinal.webp'
import Button from '../../components/Shared/Button'
const index = () => {
    return (
        <>
        

        <div className='bg-black-800 pt-7 pb-28 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${homebg})` }}>
            <div className='max-w-[694px] text-center px-4 lg:px-0 mt-24 pb-6 mx-auto grid grid-cols-1'>
                <h1 className='text-5xl  font-medium capitalize leading-[64px] font-Ringbearer'>
                    Genesis - <span className='Thrones'> Founder </span>  Pack
                </h1>
            </div>
            <div className='max-w-[1320px] mt-14 mx-auto grid px-3 md:px-0 gap-3 md:gap-8 grid-cols-1 md:grid-cols-2 '>
                <div>
                    <h2 className='text-4xl md:text-5xl font-medium capitalize font-Ringbearer leading-[80px] text-[#F7F6DA]'>GENESIS <span className='text-[#FFD160]'> PERKS </span> </h2>
                    <ul className='list-disc mt-6 pl-5 text-[#F7F6DA] text-lg font-medium leading-9 flex flex-col font-Bai-Jamjuree md:gap-8 gap-4'>
                        <li> POLL ACCESS PACKAGE SALES ( WILL HAVE A POLL AND THE AMOUNT BE DIVIDED BY ALL GENESIS) </li>
                        <li> ACCESS TO PRE-SALE ALL PACKS 4H BEFORE THE MAIN SALE </li>
                        <li> FREE GAME ACCESS - INCLUDING ALFA AND BETA TESTS </li>
                        <li> 1 EXTRA ACCESS GAME CARD - YOU CAN GIVE TO A FRIEND</li>
                        <li> POLL ACESS FOR EXCLUSIVES PERIODIC AIRDROPS ONLY TO GENESSIS </li>
                        <li> EARLY ACCESS ON THE RELEASE DATE</li>
                        <li> UNIQUE FOUNDER PACK COMPLETE KIT INGAME - ( ARMOR AND WEAPONS ) </li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <img src={Thorns} alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-8 mt-12 items-center'>
                <h2 className='text-4xl md:text-[56px] font-Ringbearer leading-[68px] capitalize'> MINT <span> 0/3000 </span> </h2>
                <Button>
                    MINT NOW
                </Button>
            </div>
        </div>
        </>
    )
}

export default index

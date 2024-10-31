import React from 'react'
import homebg from '../../assets/images/tokencrypto.webp'
import bnnrimg from '../../assets/images/img2.png'
const Tokencrypto = () => {
    return (
        <div className='bg-black-800 pt-7 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${homebg})` }}>
            <div className='max-w-[1320px] px-4 lg:px-0 mt-36 pb-6 mx-auto grid gap-4 md:gap-20 grid-cols-1 md:grid-cols-2'>
                <div className='flex  flex-col justify-center'>
                    <span className='mb-3 font-Bai-Jamjuree uppercase tracking-widest'>TOKEN CRYPTO</span>
                    <h1 className='text-5xl  font-medium leading-[64px] font-Ringbearer'>
                    Thrones of Ages <span className='Thrones'> $TOA Coin</span> 
                    </h1>
                </div>
                <div className='flex md:justify-end justify-center'>
                    <img src={bnnrimg} alt="Image not found" />
                </div>

            </div>

            <div className='max-w-[1320px] px-4 lg:px-0 pb-20 mx-auto grid gap-4 md:gap-20 grid-cols-1 md:grid-cols-2'> 
                <div className='text-[#F7F6DA] text-lg font-medium leading-[35px]'>
                    <p>“$TOA” is the in-game currency of **Thrones of Ages**, allowing players to purchase, trade, and obtain new items within the game. Like any ingame coin , “$TOA” every player can engage in the vibrant economy of Thrones of Ages.</p>
                    <p>“$TOA” is more accessible and widely used in the game compared to its counterpart, “TOA”. the $TOA is farm ingame, allowing for new coins to be generated as rewards for in-game achievements or special events. It can be Swap for TOA  on centralized and decentralized exchanges like other digital currencies.</p>
                </div>

                <div className='text-[#F7F6DA] text-lg font-medium leading-[35px]'>
                    <p>$TOA also has a deflationary aspect, as it is consumed when used for specific in-game actions. For example, linking items with special gems or purchasing consumables like potions requires burning $TOA, thereby reducing the overall supply.</p>
                    <p>The in-game currency will have base liquidity in a decentralized protocol, backed by TOA in a managed pool to ensure stable trading. However, the primary method to earn $TOA remains through gameplay and achieving rewards, aligning with the "play to earn" philosophy of Thrones of Ages.</p>
                </div>
            </div>
        </div>
    )
}

export default Tokencrypto

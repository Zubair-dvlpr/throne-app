import React from 'react'
import homebg from '../../assets/images/homebg.webp'
import bannerimg from '../../assets/images/bannerimg.png'
import Button from '../../components/Shared/Button'
const Home = () => {
  return (
    <React.Fragment>
      <div className='bg-black-800 pt-7 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${homebg})` }}>
        <div className='max-w-[1320px] px-4 lg:px-0 mt-36 pb-20 mx-auto grid gap-4 md:gap-20 grid-cols-1 md:grid-cols-2'>
          <div>
            <span className='mb-3 font-Bai-Jamjuree uppercase tracking-widest'>TOKEN CRYPTO</span>
            <h1 className='text-5xl  font-medium leading-[64px] font-Ringbearer'>
              <span className='Thrones'>Thrones</span> of Ages TOA Coin
            </h1>
            <p className='text-[#F7F6DA] mb-6 text-lg font-medium leading-9'>
              The “TOA” token, built on the Ethereum blockchain, is the main cryptocurrency in “Thrones of Ages”. It serves multiple purposes, including on-chain transactions, purchasing exclusive bundles, acquiring cosmetic items, and participating in limited NFT sales events. Players can also exchange TOA  for the in-game currency, “$TOA”, or use it to trade items on the NFT marketplace.
            </p>

            <p  className='text-[#F7F6DA] text-lg font-medium leading-9'>
              Utilizing the ERC20 standard, “TOA” minimizes transaction fees. You can use it to buy and sell NFTs, including rare items, resources, and abilities, directly on our marketplace through your digital wallet (such as Metamask).
            </p>

            <div className='mt-8'>
              <Button>BUY  TOA</Button>
            </div>

          </div>
          <div className='flex justify-center items-center'>
            <img src={bannerimg} alt='THRONES OF AGE' />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
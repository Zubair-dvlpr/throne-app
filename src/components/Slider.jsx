
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import '../../node_modules/swiper/swiper-bundle.min.css';
// Import Swiper styles


import bgslide1 from '../assets/images/slide1.webp'
import bgslide2 from '../assets/images/slide2.webp'
import bgslide3 from '../assets/images/slide3.webp'
import bgslide4 from '../assets/images/slide4.webp'
import bgslide5 from '../assets/images/slide5.webp'
import fish from '../assets/images/fish.png'
import sliderlogo from '../assets/images/sliderlogo.png'
import FooterBottom from './FooterBottom';
import Button from './Shared/Button';
import { useContext, useEffect, useRef } from 'react';
import { MenuContext } from '../ContextApi/MenuProvider';
import { Link } from 'react-router-dom';

const Slider = () => {
    const { isMenuOpen } = useContext(MenuContext);
    const swiperRef = useRef(null);

    useEffect(() => {
        // Ensure swiper is initialized and start the interval
        const interval = setInterval(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideNext();
                // Move to the next slide every 1 second
            }
        }, 4000); // 1000ms = 1 second

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);




    return (
        <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 1000 }}
            style={{ height: '100vh', width: '100%', zIndex: isMenuOpen ? -1 : 1 }} // Full screen slides
        >
            <SwiperSlide>
                <div className=' pt-14  flex flex-col justify-between bg-slate-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgslide1})` }}>
                    <div className='max-w-[1320px]  h-[80%] mx-auto'>
                        <div className='h-10'></div>
                        <div className='max-w-[850px] mx-auto text-center flex flex-col justify-center items-center'>
                            <img src={sliderlogo} alt="" />
                            <p className='font-Bai-Jamjuree text-lg font-medium tracking-[3.2px] uppercase text-[#F7F6DA]'>GET YOUR WHITELIST NOW</p>
                            <h2 className='font-Ringbearer text-5xl  font-medium leading-[70px]'>WELCOME  TO <span className='text-[#D8813E]'> THRONES </span>   OF  AGES PLAY  TO <span className='text-[#FFD160]'> EARN </span> </h2>
                            <div className='flex mt-2 gap-5'>
                                <Button>
                                    <div>
                                        <div>PLAY NOW</div>
                                        <p className='text-white font-Bai-Jamjuree text-sm'>THRONES OF AGES</p>
                                    </div>
                                </Button>
                               
                                    <Button to='https://youtu.be/77cjIXFVxMU' target='_blank'>
                                        <div>TRAILER</div>
                                        <p className='text-white font-Bai-Jamjuree text-sm'>THRONES OF AGES</p>
                                    </Button>
                                

                            </div>
                            <Link to='preregister' className='mt-3  z-10 font-Bai-Jamjuree text-lg font-medium tracking-[3.2px] uppercase text-[#F7F6DA]'>PRE REGISTER</Link>
                        </div>

                    </div>
                    <div className='h-[20%]'>
                        <FooterBottom />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=' pt-36 flex flex-col justify-between  bg-slate-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgslide2})` }}>
                    <div className='max-w-[1320px]  h-[80%] mx-auto'>

                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>
                                <p className='uppercase font-Bai-Jamjuree text-base mb-2 leading-[4.8px] text-[#F7F6DA]'>revolutionizes the MMORPG</p>
                                <h2 className='font-Ringbearer text-4xl leading-[60px] font-medium capitalize'> <span className='text-[#A36841]'>“Thrones of Ages”</span> revolutionizes
                                    the MMORPG</h2>
                                <p className='mt-2 text-lg leading-6 font-Bai-Jamjuree font-medium'>“Thrones of Ages” revolutionizes the MMORPG experience by integrating
                                    advanced technology and cryptocurrency into its immersive game economy.
                                    Players engage in a vast, open world where in-game assets are tokenized.
                                    The game’s economy thrives in players can trade, buy, and sell unique items
                                    and resources securely and transparently. With a focus on decentralized
                                    governance, players influence the economy and political landscape through
                                    strategic decisions. "Thrones of Ages" offers not just epic gameplay, but a
                                    robust economic system where your in-game conquests can translate into
                                    tangible wealth and influence.</p>
                                <div className='mt-3'>
                                    <Button to='/stoa'>
                                        DISCOVER TOA
                                    </Button>
                                </div>

                            </div>

                            <div></div>
                        </div>

                    </div>
                    <div className='h-[20%]'>
                        <FooterBottom />
                    </div>
                </div>
            </SwiperSlide>
              <SwiperSlide>
                <div className='h-screen pt-36 flex flex-col justify-between  bg-slate-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgslide3})` }}>
                    <div className='max-w-[1320px]  h-[80%] mx-auto'>

                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div>

                            </div>
                            <div>
                                <p className='uppercase font-Bai-Jamjuree text-base mb-2 leading-[4.8px] text-[#F7F6DA]'>dungeon holds untold treasure</p>
                                <h2 className='font-Ringbearer text-4xl leading-[60px] font-medium capitalize'>embark on an <span className='text-[#FF9753]'> epic </span>  adventure where
                                    every <span className='text-[#EF7245]'> dungeon  </span> holds
                                </h2>
                                <p className='mt-2 text-lg leading-6 font-Bai-Jamjuree font-medium'>In "Thrones of Ages," embark on an epic adventure where every dungeon holds untold treasures and every quest leads to greater rewards. Delve deep into ancient dungeons filled with formidable foes and legendary bosses, battling your way through to discover rare items and powerful gear. As you conquer these challenges, you'll earn valuable tokens that can be traded or used to enhance your character's strength. Beyond the dungeons, explore vast landscapes where you can farm resources, craft unique items, and trade in a player-driven economy. In this ever-expanding world, your journey is not just about survival—it's about amassing wealth, power, and prestige. Discover the thrill of the hunt and the satisfaction of building your legacy in "Thrones of Ages."</p>
                                <div className='mt-3'>
                                    <Button to="/stoa">
                                        DISCOVER TOA
                                    </Button>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className='h-[20%]'>
                        <FooterBottom />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='h-screen pt-36 flex flex-col justify-between  bg-slate-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgslide4})` }}>
                    <div className='max-w-[1320px]  h-[80%] mx-auto'>
                        <div className='max-w-3xl mx-auto text-center'>
                            <p className='uppercase font-Bai-Jamjuree text-base mb-2 leading-[4.8px] text-[#F7F6DA]'>dungeon holds untold treasure</p>
                            <h2 className='font-Ringbearer text-4xl leading-[60px] font-medium capitalize'>embark on an <span className='text-[#FF9753]'> epic </span>  adventure where
                                every <span className='text-[#EF7245]'> dungeon  </span> holds
                            </h2>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-8'>
                            <div className='col-span-3'>
                                <p className='mt-2 text-lg leading-6 font-Bai-Jamjuree font-medium'>In "Thrones of Ages," the game economy is fueled by two powerful currencies: the **TOA** (a cryptocurrency) and the **$TOA** ( INGAME COIN), . TOA is the backbone of the game's financial system, allowing players to buy, trade, and invest in valuable assets both in-game and in the real world. Meanwhile, $TOA are earned through gameplay, such as completing quests, conquering dungeons, and farming resources</p>
                            </div>
                            <div className='col-span-2 gap-4 flex flex-col items-center justify-between'>

                                <img src={fish} alt="" />

                                <div className=''>
                                    <Button to='https://thronesofages.com/stoa'>
                                        DISCOVER TOA
                                    </Button>
                                </div>

                            </div>

                            <div className='col-span-3'>
                                <p className='mt-2 text-lg leading-6 font-Bai-Jamjuree font-medium'>These can be exchanged for TOA, creating a seamless link between your in-game achievements and real-world financial growth. As the economy within "Thrones of Ages" flourishes, players have the opportunity to turn their skills and strategies into tangible wealth, making this more than just a game—it's a true economic adventure.</p>
                            </div>

                        </div>

                    </div>
                    <div className='h-[20%]'>
                        <FooterBottom />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='h-screen pt-14  flex flex-col justify-between bg-slate-500 bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgslide5})` }}>
                    <div className='max-w-[1320px] h-[80%] mx-auto'>
                        <div></div>
                        <div className='max-w-[850px] mt-36 mx-auto text-center flex flex-col justify-center items-center'>

                            <p className='font-Bai-Jamjuree text-lg font-medium tracking-[3.2px] uppercase text-[#F7F6DA]'>Join the Exciting World of Thrones of Ages</p>
                            <h2 className='font-Ringbearer text-5xl  font-medium leading-[70px]'>Begin your   <span className='text-[#D8813E]'> adventure </span>   today </h2>
                            <p className='font-Bai-Jamjuree text-lg font-medium tracking-[3.2px] uppercase text-[#F7F6DA]'>PRE REGISTER NOW TO GET WHITELISTED</p>
                            <div className='flex mt-2 gap-5'>
                                <Button>
                                    <div>
                                        <div>PLAY NOW</div>
                                        <p className='text-white font-Bai-Jamjuree text-sm'>THRONES OF AGES</p>
                                    </div>
                                </Button>
                                <Button to='https://youtu.be/77cjIXFVxMU' target='_blank'>
                                        <div>TRAILER</div>
                                        <p className='text-white font-Bai-Jamjuree text-sm'>THRONES OF AGES</p>
                                    </Button>
                            </div>
                            <Link to='preregister' className='mt-3  z-10 font-Bai-Jamjuree text-lg font-medium tracking-[3.2px] uppercase text-[#F7F6DA]'>PRE REGISTER</Link>
                        </div>

                    </div>
                    <div className='h-[20%]'>
                        <FooterBottom />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
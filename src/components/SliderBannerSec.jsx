
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css';
import bgslide1 from '../assets/images/slide1.webp'
import FooterBottom from './FooterBottom';

const SliderBannerSec = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      style={{ height: '100vh', width: '100%' }} // Full screen slides
    >
      <SwiperSlide>
      <div className='h-screen flex flex-col justify-between bg-slate-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bgslide1})`}}>
            <div>

            </div>
            <div className='text-center'>
                <img src="" alt="" />
                <p></p>
                <h2>WELCOME  TO <span className=''> THRONES </span>   OF  AGES PLAY  TO  EARN</h2>
                <div>
                    <button>READ MORE</button>
                    <button>READ MORE</button>
                </div>
                <span>PRE REGISTER</span>
            </div>
            <FooterBottom />

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen bg-slate-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bgslide1})`}}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen bg-slate-500 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bgslide1})`}}>Slide 3</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderBannerSec;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homebg from '../assets/images/founder.webp'


const SliderBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true
    };

    return (
        <Slider {...settings} style={{ height: '100vh' }}>
            <div className='  text-white' >
                <div style={{ backgroundImage: `url(${homebg})` }}>
                    <div className='max-w-[694px] text-center px-4 lg:px-0 mt-24 pb-6 mx-auto grid grid-cols-1'>
                        <h1 className='text-5xl  font-medium capitalize leading-[64px] font-Ringbearer'>
                            Genesis - <span className='Thrones'> Founder </span>  Pack
                        </h1>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default SliderBanner;

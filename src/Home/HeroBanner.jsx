import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import HeroBackground from './HeroBackground';

const HeroBanner = () => {
    const BackGroungImage = [ 
        {
            bgImage: "/Assets/Images/Home/Hero1.png",
            bgMobile: "/Assets/Images/Home/Hero1.png",
        },
        {
            bgImage: "/Assets/Images/Home/Hero2.png",    
             bgMobile: "/Assets/Images/Home/Hero2.png",
        },
        {
            bgImage: "/Assets/Images/Home/Hero3.png",
             bgMobile: "/Assets/Images/Home/Hero3.png",
        },
        {
            bgImage: "/Assets/Images/Home/Hero4.png",
             bgMobile: "/Assets/Images/Home/Hero4.png",
        }
    ];

    return (
        <div className='flex justify-center mb-0'>
            <Swiper
                speed={400}
                modules={[EffectFade, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect={'fade'}
                allowTouchMove={false}
                className="w-full"
            >
                {BackGroungImage.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <HeroBackground
                            bgImage={slide.bgImage}
                            bgMobile={slide.bgMobile}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';




export default function Slide() {


    const [slidesPerView, setSlidesPerView] = useState(3);
    const updateSlidesPerView = () => {
        if (window.innerWidth <= 768) {
            setSlidesPerView(1);
        } else {
            setSlidesPerView(3);
        }
    };

    // Add a resize event listener to update slidesPerView when the screen size changes
    useEffect(() => {
        // updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);


    return (
        <div className='mx-8 my-16'>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide className='flex flex-col justify-start'>


                    <img src="/slidePic1.jpeg" className="w-full h-auto" />
                    <p className='font-medium	 text-xl mt-4  pl-4 '>The Feel Good Collection</p>
                </SwiperSlide>

                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/slidePic2.webp" className="w-full h-auto" />
                    <p className='font-medium	 text-xl mt-4 pl-4 '>Air Force 1</p>
                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/slidePic3.jpeg" className="w-full h-auto" />
                    <p className='font-medium	 text-xl mt-4 pl-4 '>Feel Good Bras</p>
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
}

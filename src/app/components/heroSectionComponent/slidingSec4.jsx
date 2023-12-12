import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation, Keyboard } from 'swiper/modules';

export default function SlidingSec4() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };


    const [slidesPerView, setSlidesPerView] = useState(3);


    // Function to update slidesPerView based on screen width
    const updateSlidesPerView = () => {
        if (window.innerWidth <= 768) {
            // Set to 1 when screen width is less than or equal to 768px (mobile layout)
            setSlidesPerView(1);
        } else {
            // Set back to 3 for larger screens
            setSlidesPerView(3);
        }
    };

    // Add a resize event listener to update slidesPerView when the screen size changes
    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    return (
        <div className='mb-10'>
            <p className='text-2xl font-semibold pl-14 mb-8'>Always Iconic</p>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={slidesPerView}
                centeredSlides={true}
                spaceBetween={0}
                loop={true}
                pagination={{
                    type: 'fraction',
                }}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide ><img src="shoe1.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe2.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe3.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe4.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe5.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe6.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe7.jpeg" /></SwiperSlide>
                <SwiperSlide><img src="shoe8.jpeg" /></SwiperSlide>

            </Swiper>


        </div>
    );
}

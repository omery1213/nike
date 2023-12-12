import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Keyboard } from 'swiper/modules';




export default function FallSLide() {


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


        <div className='mx-8 mb-44'>
            <p className='text-2xl font-semibold pl-14 mb-8'>New Fall Styles</p>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    type: 'progressbar',
                }}

                modules={[Pagination, Keyboard]}
                className="mySwiper "
            >
                <SwiperSlide className='flex flex-col justify-start h-full'>

                    <img src="/fallShoe1.png" className="w-full h-auto" />
                    <div className='flex flex-row justify-between'>
                        <div className=' align-text-top pb-8'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Tech Hera</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Shoes</p>

                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$110</b>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe2.png" className="w-full h-auto" />
                    <div className='flex flex-row '>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Hair Dunk Jumbo</h1>
                            <p className='text-md text-gray-400  pl-4 '>Men's Shoes</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$125</b>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe3.png" className="w-full h-auto" />
                    <div className='flex flex-row '>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Dunk Low Next Nature</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Shoes</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$110</b>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe4.png" className="w-full h-auto" />
                    <div className='flex flex-row '>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Air Dunk Jumbo</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Shoes</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$95</b>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe5.png" className="w-full h-auto" />
                    <div className='flex flex-row '>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Air Hurache Craft</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Shoes</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$130</b>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe6.png" className="w-full h-auto" />
                    <div className='flex flex-row '>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Structure 25</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Water Proof Trail</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$160</b>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe7.png" className="w-full h-auto" />
                    <div className='flex flex-row '>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Pegasus Trail 4 GORE-TEX</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Shoes</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$160</b>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='flex flex-col justify-start'>
                    <img src="/fallShoe8.png" className="w-full h-auto" />
                    <div className='flex flex-row pb-8'>
                        <div className=' align-text-top'>
                            <h1 className='text-md font-normal mt-4  pl-4 '>Nike Gamma Force</h1>
                            <p className='text-md text-gray-400  pl-4 '>Women's Shoes</p>
                        </div>
                        <div className='pt-4'>
                            <b className=' ml-20 md:ml-44'>$95</b>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>


    );
}

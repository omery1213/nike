import React from 'react'
import Image from 'next/image'

function Section4() {
    return (
        <>
            <h1 className='text-2xl font-semibold pl-14 mb-8'>Featured</h1>
            <div className='w-full  flex flex-col md:flex-row mb-24 px-10 '>
                <div className='w-full  md:w-1/2 relative'>
                    <img
                        src={'/staticPic1.jpeg'}
                        alt='Image Alt Text'
                        width='95%'
                        height='90%'
                        className='mr-4'
                    />
                    <div className='absolute bottom-4 left-2 md:bottom-6 md:left-6 p-4'>
                        <h1 className='text-white pb-1'>Nike Tech<br /></h1>
                        <p className='text-white text-sm md:text-xl font-semibold'>

                            Even Better Than The<br />
                            Last Time You Wore It
                        </p>
                        <button className='mt-3 md:mt-6 border-black bg-white text-black rounded-2xl	 py-2 px-4 mr-3 hover:bg-gray-300 hover:bg-opacity-50 transition duration-300'>Suit Up</button>

                    </div>
                </div>
                <div className='w-full md:w-1/2 relative'>
                    <img
                        src={'/staticPic2.jpeg'}
                        alt='Image Alt Text'
                        width='95%'
                        height='90%'
                        className='mr-4'
                    />
                    <div className='absolute bottom-4 left-2 md:bottom-6 md:left-6 p-4'>
                        <h1 className='text-white pb-1'>Nike Style<br /></h1>
                        <p className='text-white text-sm md:text-xl font-semibold'>

                            Classic Pieces For <br />
                            Your Everybody Uniform
                        </p>
                        <button className='mt-6 border-black bg-white text-black rounded-2xl	 py-2 px-4 mr-3 hover:bg-gray-300 hover:bg-opacity-50 transition duration-300'>Shop</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Section4
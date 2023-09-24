import { Button } from '@mui/material'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
    weight: '800',
    subsets: ["latin"],
    display: "swap"
})
const poppinsP = Poppins({
    weight: '600',
    subsets: ["latin"],
    display: "swap"
})
const inter = Inter({
    weight: '600',
    subsets: ["latin"],
    display: "swap"
})
const interA = Inter({
    weight: '300',
    subsets: ["latin"],
    display: "swap"
})




function HeroMain() {
    return (
        <div className='flex flex-col md:flex-row justify-around mt-6 md:mt-8 md:mx-24 w-100% '>

            <div className={` w-full md:w-1/2 flex flex-col align-middle justify-center`}>
                <h1 className={`${poppins.className} text-6xl  xl:text-7xl md:pr-20 xl:pr-0 `}>YOUR FEET
                    DESERVE
                    THE BEST</h1>
                <p className={`${poppinsP.className} text-base mt-4 leading-6`}>YOUR FEET DESERVE THE BEST AND WE&rsquo;RE HERE TO HELP YOU
                    WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE&rsquo;RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className='mt-4 flex '>

                    <Button className={`bg-red-600 text-white hover:bg-red-400 mr-7 ${inter.className}`} sx={{
                        border: '1px solid black',
                        padding: ' 6px 16px 6px 16px',
                        lineHeight: '29px'
                    }}>Shop Now</Button>

                    <Button sx={{
                        border: '1px solid black',
                        padding: ' 6px 16px 6px 16px',
                        color: '#5A5959',
                        lineHeight: '29px'
                    }} className={`${inter.className}`}>
                        Categories
                    </Button>
                </div>
                <p className={`mt-4 ${interA.className} `}>Also Available On</p>
                <div className='flex mt-4'>
                    <Image
                        src={'/flipkart.png'}
                        width={32}
                        height={32}
                        className='mr-4'
                    />
                    <Image
                        src={'/amazon.png'}
                        width={32}
                        height={32}
                    />
                </div>

            </div>
            <div className='w-full md:w-1/2 flex justify-center align-middle'>
                <Image src={'/shoe_image.png'} width={530} height={487} />

            </div>
        </div>
    )
}

export default HeroMain
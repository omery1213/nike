import React from 'react'
import { Oswald } from 'next/font/google';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const oswald = Oswald({
  weight: '700',
  subsets: ["latin"],
  display: "swap"
})
const oswald2 = Oswald({
  weight: '400',
  subsets: ["latin"],
  display: "swap"
})


function Section2() {
  return (
    <div className='flex flex-col justify-center align-middle text-center my-6'>
      <p className={`${oswald.className} text-8xl`}>
        LEBRON XXL<br />
        JUST LANDED
      </p>
      <pre className={`mt-6 ${oswald2.className}`}>
        Takeoff in the XXls newest colorway Akoyo, built with<br />
        Zoom technology to raise your game to another level
      </pre>
      <div className={`mt-6 ${oswald2.className}`}>
        <button className='border-black bg-black text-white rounded-2xl	 py-2 px-6 mr-3 hover:bg-black hover:bg-opacity-50 transition duration-300'>Shop</button>
        <button className='border-black bg-black text-white rounded-2xl	 py-2 px-5 text-center hover:bg-black hover:bg-opacity-50 transition duration-300'>Watch<PlayArrowIcon /> </button>
      </div>
    </div>
  )
}

export default Section2;

'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import MessageIcon from '@mui/icons-material/Message';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { LocalPhone } from '@mui/icons-material';
import BasicTextFields from '../components/contactComponents/inputFields';

const poppins = Poppins({
    weight: '800',
    subsets: ["latin"],
    display: "swap"
})

const poppins6 = Poppins({
    weight: '600',
    subsets: ["latin"],
    display: "swap"
})
const pointed = () => {
    alert("Submitted Successfully");
}
function ContactUs() {
    return (
        <div className='mt-14pct md:mt-10pct px-2 md:px-28' id='contact'>
            <h2 className={` w-80 h-20 top-36 left-44 ${poppins.className} text-5xl leading-10 text-center md:text-start	`}>
                Contact us
            </h2>
            <p className={`${poppins6.className} text-base	`}>
                LET’S CONNECT: WE’RE HERE TO HELP,
                AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE
                A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT
                FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
            </p>
            <div className='main flex flex-col-reverse md:flex-row w-full mt-6'>
                <div className={`w-full md:w-1/2`}>
                    <div className={`flex flex-row gap-8 justify-around	`}>
                        <button className={`bg-black text-white py-2 px-4 rounded gap-2 w-60 cursor-pointer hover:bg-opacity-80 transition duration-300`}><MessageIcon />&nbsp;VIA SUPPORT CHAT</button>
                        <button className={`bg-black text-white py-2 px-4 rounded gap-2 w-60 cursor-pointer hover:bg-opacity-80 transition duration-300 ml-5`}><LocalPhone /> &nbsp;VIA CALL</button>
                    </div>
                    <button className={`bg-white text-black py-2 px-4 rounded gap-2 w-full cursor-pointer mt-4 border border-black hover:bg-slate-100  transition duration-300`}><MessageIcon />&nbsp;VIA EMAIL FORM</button>
                    <BasicTextFields />
                    <div className='flex justify-end mr-8'>
                        <button onClick={pointed} className={`bg-black text-white py-2 px-4 rounded gap-2 w-48  cursor-pointer hover:bg-opacity-80 transition duration-300`}>SUBMIT</button>
                    </div>

                </div>
                <div className='w-full md:w-1/2 mb-8'>
                    <Image
                        src={'/contact.svg'}
                        width={608}
                        height={615}
                    />
                </div>

            </div>

        </div>
    )
}

export default ContactUs
"use client";
import React from 'react'

import Link from 'next/link'
import NavLinks from './navLinks'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileBar from './mobileBar';
import Image from 'next/image';
import { Button } from '@mui/material';

function NavBar() {

    const navlinks = [
        {
            title: "Menu",
            href: "#menu"
        },
        {
            title: "Location",
            href: "#location"
        },
        {
            title: "About",
            href: "#about"
        },
        {
            title: "Contact",
            href: "contactUs"
        }
    ]
    const [openNavBar, setOpenNavBar] = useState(false);

    return (<>
        <nav className=' fixed top-0 right-0 left-0 bg-[#fcfcfc]  z-10 bg-opacity-90 pt-1 '>
            <div className='flex align-center mx-5 p-2 font-sans justify-between md:px-6'>
                <div  >
                    <Link href={'/'}>
                        <Image src="/logo1.png" alt="Logo" width={100} height={50} />
                    </Link>
                </div>
                {
                    !openNavBar ? <button onClick={() => setOpenNavBar(!openNavBar)} className='border-2 w-10 h-10 md:hidden mt-3 text-black hover:text-gray-600'><MenuIcon /></button> :
                        <button onClick={() => setOpenNavBar(!openNavBar)} className='border-2  w-10 h-10 md:hidden mt-3 text-black hover:text-gray-600 '><CloseIcon /></button>
                }


                <div className='menu hidden  md:w-auto md:block'>
                    <ul className='flex flex-row p-1 space-x-6 cursor-pointer md:text-lg '>
                        {
                            navlinks.map((link, index) => (
                                <li className='list-none pr-2 pl-2 pt-2' key={index}> <NavLinks href={link.href} title={link.title} /></li>
                            ))
                        }
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <Button variant='contained' className='bg-red-600 px-2  w-24 hover:bg-red-400 mt-1'>Login</Button>
                </div>

            </div>
            {
                openNavBar ? <MobileBar links={navlinks} /> : null
            }
        </nav>
        {/* <hr /> */}
    </>
    )
}

export default NavBar
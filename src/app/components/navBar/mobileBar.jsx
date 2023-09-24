import React from 'react'
import Link from 'next/link'
import NavLinks from './navLinks'
import { Button } from '@mui/material'
function MobileBar({ links }) {

    return (
        <div>
            <ul className='flex flex-col text-center p-2 space-y-8 text-gray-300 hover:text-gray-600  rounded   cursor-pointer md:hidden '>
                {
                    links.map((link, index) => (
                        <li className='' key={index}> <NavLinks href={link.href} title={link.title} /></li>
                    ))
                }
                {/* <li><Button className='border-2 border-red-600 bg-red' >Login</Button></li> */}
                <li> <Button variant='contained' className='bg-red-600 px-2  w-24 hover:bg-red-400 mt-1'>Login</Button>
                </li>

            </ul>
        </div>


    )
}

export default MobileBar
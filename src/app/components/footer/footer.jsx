import React from 'react'
import style from './footer.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
    return (
        <div className='p-8 pt-10 pb-0 bg-black text-white h-auto'>
            <div className={`${style.classname}  flex flex-col md:flex-row justify-between`}>
                <div className='flex flex-col md:flex-row '>
                    <div className={`${style.fontMain} md:mr-36 `}>
                        <b>
                            <h1 className='mb-4'> GIFT CARDS</h1>
                            <h1 className='mb-4'>PROMOTIONS</h1>
                            <h1 className='mb-4'>FIND A STORE</h1>
                            <h1 className='mb-4'>BECOME A MEMBER</h1>
                            <h1 className='mb-4'>NIKE JOURNAL</h1>
                            <h1 >SEND US FEEDBACK</h1>
                        </b>
                    </div>

                    <div className='md:mr-36'>
                        <hr className='md:hidden' />
                        <h1 className={` ${style.fontMain} mb-6 md:mb-2 mt-2 md:mt-0 `}><b> Get Help</b></h1>
                        <div className={` text-gray-500  text-sm hidden md:block ${style.font}`}>
                            <p className='mb-2 hover:text-white'>Order Status</p>
                            <p className='mb-2 hover:text-white'>Shipping and Delivery</p>
                            <p className='mb-2 hover:text-white'>Returns</p>
                            <p className='mb-2 hover:text-white'>Order Cancellations</p>
                            <p className='mb-2 hover:text-white'>Payment Options</p>
                            <p className='mb-2 hover:text-white'>Gift Card Balance</p>
                            <p className='mb-2 hover:text-white'>Contact Us</p>
                        </div>
                    </div>
                    <div className='md:mr-36'>
                        <h1 className={`${style.fontMain} mb-2`}><b> About Nike</b></h1>
                        <div className={` text-gray-500  text-sm hidden md:block ${style.font}`}>
                            <p className='mb-2 hover:text-white'>News</p>
                            <p className='mb-2 hover:text-white'>Careers</p>
                            <p className='mb-2 hover:text-white'>Investors</p>
                            <p className='mb-2 hover:text-white'>Purpose</p>
                            <p className='mb-2 hover:text-white'>Sustainability</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <TwitterIcon style={{ fontSize: 36 }} className='hover:bg-gray-500 rounded-xl transition delay-200 mr-3' />
                    <FacebookIcon style={{ fontSize: 36 }} className='hover:bg-gray-500 rounded-xl transition delay-200 mr-3' />
                    <YouTubeIcon style={{ fontSize: 36 }} className='hover:bg-gray-500 rounded-xl transition delay-200 mr-3' />
                    <InstagramIcon style={{ fontSize: 36 }} className='hover:bg-gray-500 rounded-xl transition delay-200 mr-3' />
                </div>
            </div >

            {/* second div starts from here */}
            <div className='flex flex-col md:flex-row justify-between text-xs mt-16 pb-6'>
                <div className=' align-baseline'>
                    <LocationOnIcon style={{ fontSize: 18, marginBottom: 5 }} /> <span className='mx-3'>United States</span>   <span className='text-gray-500'>&copy; 2013 Nike, Inc.All Rights Reserved</span>
                </div>
                <div className={` text-gray-500  text-sm  ${style.font} flex space-x-6 md:mr-6 `}>
                    <p className='mb-2 hover:text-white'>Guides</p>
                    <p className='mb-2 hover:text-white'>Terms of Sale</p>
                    <p className='mb-2 hover:text-white'>Terms of Use</p>
                    <p className='mb-2 hover:text-white'>Nike Privacy Policy</p>
                    <p className='mb-2 hover:text-white'>CA Supply Chains Act</p>
                </div>
            </div>




        </div>
    )
}

export default Footer
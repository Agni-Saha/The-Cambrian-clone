import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import video from "../assets/bg-video.mp4"

export default function Banner() {
    const [navOpen, setNavOpen] = useState(false)

    const handleOpen = () => {
        setNavOpen(!navOpen)
    }

    return (
        <div className='h-[93vh]'>
            <div className={navOpen ? "overlay" : ""}></div>
            <div className='video-wrapper'></div>
            <video autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/mp4" />
            </video>
            <div className='pt-12 grid grid-cols-6'>
                <div className="flex flex-col">
                    <div className="z-50 pl-10 pt-2 fixed">
                        <img src={logo} alt="" className='pl-2' />
                        <div className='nav_container pl-1'>
                            <div id="hamburger" className={navOpen ? 'open' : ""}
                                onClick={() => handleOpen()}>
                                <svg width="100" height="100" viewBox="0 0 175 175">
                                    <path className="line line1"
                                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path className="line line2" d="M 20,50 H 80" />
                                    <path className="line line3"
                                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </div>
                        </div>
                        <ul className={`leArchitect pl-2 pr-8 fade_overlay ${navOpen ? 'show' : "hidden"}`}>
                            <li className='py-1 border-y-[1px] border-gray-500 text-xl'>
                                Hotels
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Rooms
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Restaurants
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                The Axe Bar
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Wellness
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Meet
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Offers
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Activities
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Photos
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Gift Voucher
                            </li>
                            <li className='py-1 border-b-[1px] border-gray-500 text-xl'>
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-5 text-7xl text-white z-10 
                pb-24 border-l-[1px] border-gray-500 pl-3 leArchitect">
                    The <br /> Cambrian
                </div>
            </div>
        </div>
    )
}

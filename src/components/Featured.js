import React from 'react'
import image from "../assets/featured-bg.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Lazy, Navigation } from 'swiper';

import img1 from "../assets/Accordion2/1.webp"
import img2 from "../assets/Accordion2/2.webp"
import img3 from "../assets/Accordion2/3.webp"

import img1logo from "../assets/Accordion2/1-logo.webp"
import img2logo from "../assets/Accordion2/2-logo.webp"
import img3logo from "../assets/Accordion2/3-logo.webp"

import imgLogo from "../assets/next-red.png"
import imgLogo2 from "../assets/next-white.png"

import "swiper/css";
import "swiper/css/navigation"

SwiperCore.use([Lazy, Navigation]);

export default function Featured() {
    return (
        <div>
            <div className='grid grid-cols-6'>
                <div className='col-span-3 border-r-2 border-gray-500'>
                    <div className='pr-6 py-4'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className='col-span-3 pl-2 pt-20'>
                    <h1 className='w-80 text-5xl leArchitect'>
                        Christmas &
                        New Year's Eve
                        Highlights
                    </h1>
                    <button className='text-[#DD0613] leArchitect text-2xl mt-8
                     flex items-center justify-center'>
                        <span>More</span>
                        <img src={imgLogo} alt="" className='button-arrow' style={{ width: "14px" }} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-6">
                <div className='border-r-2 border-gray-500 pb-20'></div>
                <div className='col-span-2 border-r-2 border-gray-500'></div>
                <div className='col-span-3 border-r-2 border-gray-500'></div>
            </div>
            <div className='h-screen featured'>
                <div className='grid grid-cols-6'>
                    <div></div>
                    <div className='h-screen col-span-4 table z-10'>
                        <div className="table-cell align-middle">
                            <h3 className='text-lg Sabon mb-4'>
                                Rooms & Suits
                            </h3>
                            <h1 className='text-8xl mb-20 leArchitect'>
                                Modern Alpine.
                            </h1>
                            <h3 className='text-lg mb-5 Sabon'>
                                71 rooms and suites in different shapes and sizes
                            </h3>
                            <button className='text-2xl leArchitect flex items-center justify-start'>
                                <span>View all rooms</span>
                                <img src={imgLogo2} alt=""
                                    className='button-arrow'
                                />
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='my-0 text-white text-center bg-[#223323] pt-10 pb-16'>
                <Swiper slidesPerView={3} spaceBetween={15} centeredSlides={true} navigation={{
                    "clickable": true
                }} lazy={true} className="mySwiper bg-[#223323]">

                    <SwiperSlide>
                        <div className='flex flex-col bg-[#223323]'>
                            <div className='bg-[#223323] border-l-2 border-gray-500 flex
                            flex-col items-start pl-4 mb-4'>
                                <img src={img1logo} alt="" />
                                <div className='mt-6 leArchitect text-4xl text-white
                                hover:text-gray-300 ease-out duration-150 cursor-pointer'>
                                    Eat
                                </div>
                            </div>
                            <img src={img1} alt="" className='swiper-bg' />
                            <div className='bg-[#223323] border-l-2 border-gray-500 flex
                            flex-col items-start pl-4 pr-8 mt-8'>
                                <p className='Sabon leading-tight text-lg text-left text-white'>
                                    'Bryn Williams at The Cambrian' opened in December 2020 and fuses the best local ingredients with his culinary insights from Wales and London.
                                </p>
                                <button className='text-2xl leArchitect text-white mt-8
                                hover:text-gray-300 ease-out duration-150 flex items-center
                                 justify-center'>
                                    <span>More</span>
                                    <img src={imgLogo2} alt=""
                                        className='button-arrow'
                                    />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex flex-col bg-[#223323]'>
                            <div className='bg-[#223323] border-l-2 border-gray-500 flex
                            flex-col items-start pl-4 mb-4'>
                                <img src={img2logo} alt="" />
                                <div className='mt-6 leArchitect text-4xl text-white
                                hover:text-gray-300 ease-out duration-150 cursor-pointer'>
                                    Play
                                </div>
                            </div>
                            <img src={img2} alt="" className='swiper-bg' />
                            <div className='bg-[#223323] border-l-2 border-gray-500 flex
                            flex-col items-start pl-4 pr-8 mt-8'>
                                <p className='Sabon leading-tight text-lg text-left text-white'>
                                    RIDE.REST.REPEAT. - learn more about The Cambrian Cycling Club.
                                </p>
                                <button className='text-2xl leArchitect text-white mt-14
                                hover:text-gray-300 ease-out duration-150 flex items-center
                                 justify-center'>
                                    <span>More</span>
                                    <img src={imgLogo2} alt=""
                                        className='button-arrow'
                                    />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='flex flex-col bg-[#223323]'>
                            <div className='bg-[#223323] border-l-2 border-gray-500 flex
                            flex-col items-start pl-4 mb-4'>
                                <img src={img3logo} alt="" />
                                <div className='mt-6 leArchitect text-4xl text-white
                                hover:text-gray-300 ease-out duration-150 cursor-pointer'>
                                    Drink
                                </div>
                            </div>
                            <img src={img3} alt="" className='swiper-bg' />
                            <div className='bg-[#223323] border-l-2 border-gray-500 flex
                            flex-col items-start pl-4 pr-8 mt-8'>
                                <p className='Sabon leading-tight text-lg text-left text-white'>
                                    Great cocktails, hearty food, an extensive wine list and local beers. The AXE Bar is the perfect spot to reflect on your day on the mountain whether climbing up or careering down.
                                </p>
                                <button className='text-2xl leArchitect text-white mt-3
                                hover:text-gray-300 ease-out duration-150 flex items-center
                                 justify-center'>
                                    <span>More</span>
                                    <img src={imgLogo2} alt=""
                                        className='button-arrow'
                                    />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='h-screen featured-2'>
                <div className='grid grid-cols-6'>
                    <div></div>
                    <div className='h-screen col-span-4 table z-10'>
                        <div className="table-cell align-middle">
                            <h3 className='text-lg  Sabon mb-4'>
                                Wellness
                            </h3>
                            <h1 className='text-8xl mb-20 leArchitect'>
                                Swiss Bliss.
                            </h1>
                            <h3 className='text-lg mb-5 Sabon'>
                                Afterwards, by the time you’re floating in our outdoor hot pool, you’ll be feeling rejuvenated and revitalised.
                            </h3>
                            <button className='text-2xl leArchitect flex items-center justify-start'>
                                <span>Discover More</span>
                                <img src={imgLogo2} alt=""
                                    className='button-arrow'
                                />
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

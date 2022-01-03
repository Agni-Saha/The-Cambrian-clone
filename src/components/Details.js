import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Lazy, Navigation } from 'swiper';

import img1 from "../assets/Accordion1/1.webp"
import img2 from "../assets/Accordion1/2.webp"
import img3 from "../assets/Accordion1/3.webp"
import img4 from "../assets/Accordion1/4.webp"
import img5 from "../assets/Accordion1/5.webp"
import img6 from "../assets/Accordion1/6.webp"
import img7 from "../assets/Accordion1/7.webp"
import img8 from "../assets/Accordion1/8.webp"
import img9 from "../assets/Accordion1/9.webp"
import img10 from "../assets/Accordion1/10.webp"
import img11 from "../assets/Accordion1/11.webp"
import img12 from "../assets/Accordion1/12.webp"
import img13 from "../assets/Accordion1/13.webp"
import img14 from "../assets/Accordion1/14.webp"
import img15 from "../assets/Accordion1/15.webp"

import nextIcon from "../assets/next-red.png"

import "swiper/css";
import "swiper/css/navigation"

SwiperCore.use([Lazy, Navigation]);

export default function Details() {
    return (
        <div className='mt-24'>
            <div className='grid grid-cols-6'>
                <div className=''></div>
                <div className='col-span-2 text-white border-l-2 border-gray-400
                 pl-3 text-4xl pb-16 leArchitect'>
                    Situated amid the pristine scenery of the Swiss Alps, and with
                    stunning mountain views in every direction.
                </div>
                <div className='col-span-3 text-white border-l-2 border-gray-400 pl-3'>
                    <p className='text-lg w-[60%] leading-tight Sabon'>
                        With breathtaking views in every direction The Cambrian
                        provides the perfect place to relax, explore and rejuvenate.
                    </p>
                    <button className='text-[#DD0613] hover:text-red-700 mt-8 text-2xl
                     leArchitect flex items-center justify-start'>
                        <span>Discover the hotel</span>
                        <img src={nextIcon} alt="" className='button-arrow'/>
                    </button>
                </div>
            </div>
            <div className='my-8 text-white text-center'>
                <Swiper slidesPerView={3} spaceBetween={15} centeredSlides={true} navigation={{
                    "clickable": true
                }} lazy={true} className="mySwiper">
                    <SwiperSlide>
                        <img src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img9} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img10} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img11} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img12} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img13} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img14} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img15} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

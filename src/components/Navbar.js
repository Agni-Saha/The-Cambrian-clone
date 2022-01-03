import React from 'react'
import nextIcon from "../assets/next-gray.png"

export default function Navbar() {
    return (
        <div className='grid Sabon grid-cols-6 border-b-2 border-gray-500 sticky top-0 z-50 text-lg'>
            <div className='bg-black border-r-[1px] py-3 pl-3  border-gray-500 text-white'></div>
            <div className='col-span-2 bg-black py-3 pl-3 border-r-[1px] border-gray-500 text-white'>
                Sat 1 Jan - Sun 2 Jan
            </div>
            <div className='bg-black border-r-[1px] py-3 pl-3 border-gray-500 text-white'>
                2 Guests
            </div>
            <div className='bg-black border-r-[1px] py-3 pl-3 border-gray-500 text-white'>
                Promocode
            </div>
            <div className='bg-[#DD0613] border-r-[1px] py-3 pl-3 border-gray-500 text-white
            flex items-center justify-center'>
                <span>Availability</span>
                <img src={nextIcon} alt="" className='button-arrow' />
            </div>
        </div>
    )
}

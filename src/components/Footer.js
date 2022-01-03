import React from 'react'
import footerLogo from "../assets/footer-logo.svg"

export default function Footer() {
    return (
        <div className='pt-3 pb-12 px-12'>
            <div className='border-t-[1px] border-b-[5px]'>
                <div className='grid grid-cols-6 Sabon'>
                    <div className='pt-4 pb-2 col-span-2'>
                        <div className='text-lg'>
                            Contact
                        </div>
                        <div className='mt-6 leading-tight text-lg'>
                            Dorfstrasse 7 CH-3715 Adelboden <br />
                            Tel: +41 33 673 8383 <br />
                            info@thecambrianadelboden.com
                        </div>
                    </div>
                    <div className='pt-4 pb-2'>
                        <div className='text-lg'>
                            Link
                        </div>
                        <div className='mt-6 leading-tight text-lg'>
                            <span className='hover:text-gray-300 ease-out duration-150 cursor-pointer' >
                                Covid-19 Information
                            </span> <br />
                            <span className='hover:text-gray-300 ease-out duration-150 cursor-pointer' >
                                Careers
                            </span> <br />
                            <span className='hover:text-gray-300 ease-out duration-150 cursor-pointer' >
                                Privacy Policy
                            </span>
                        </div>
                    </div>
                    <div className='pt-4 pb-2'>
                        <div className='mt-[3.2rem] leading-tight text-lg pl-4'>
                            <span className='hover:text-gray-300 ease-out duration-150 cursor-pointer' >
                                Cookie Policy
                            </span> <br />
                            <span className='hover:text-gray-300 ease-out duration-150 cursor-pointer' >
                                Newsletter
                            </span> <br />
                            <span className='hover:text-gray-300 ease-out duration-150 cursor-pointer' >
                                T&C Online Shops
                            </span>
                        </div>
                    </div>
                    <div className='pt-3 pb-2'>
                        <div className='mt-[3.2rem] text-2xl pl-6 leArchitect'>
                            <span className='pr-2 border-r-[1px] border-gray-500 hover:text-gray-300
                            ease-out duration-150 cursor-pointer'>
                                En
                            </span>
                            <span className='px-2 border-r-[1px] border-gray-500 hover:text-gray-300
                            ease-out duration-150 cursor-pointer'>
                                De
                            </span>
                            <span className='pl-2 hover:text-gray-300 ease-out duration-150 cursor-pointer'>
                                Fr
                            </span>
                        </div>
                    </div>
                    <div className='pt-3 pb-2 justify-end absolute right-12'>
                        <div className='mt-[3.2rem] text-2xl font-bold pl-6'>
                            <span className='social-tw'>
                                <i className="fab fa-twitter text-black text-sm"></i>
                            </span>
                            <span className='social-fb'>
                                <i className="fab fa-facebook-f text-black text-sm"></i>
                            </span>
                            <span className='social-ig'>
                                <i className="fab fa-instagram text-black text-sm"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mt-12 mb-3'>
                    <img src={footerLogo} alt="" className='footer-logo' />
                </div>
            </div>
        </div>
    )
}

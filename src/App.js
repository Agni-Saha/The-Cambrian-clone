import React from 'react'
import "./App.css"
import "./Swiper.css"
// eslint-disable-next-line
import "swiper/css/bundle";

import Banner from './components/Banner'
import Details from './components/Details'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <div className='bg-black text-white'>
            <Navbar />
            <Banner />
            <Details />
            <Featured />
            <Footer />
        </div>
    )
}

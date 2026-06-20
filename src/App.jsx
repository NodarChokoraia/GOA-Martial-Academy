import React, { useState } from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Gallery from '../components/Gallery/Gallery'
import Membership from '../components/Membership/Membership'
import Contact from '../components/Contact/Contact'
import Contact2 from '../components/Contact/Contact2'
import Contact3 from '../components/Contact/Contact3'
export default function App() {
  return (
    <>
      <div className='Parent w-full flex flex-col items-center'>
        <div className='container flex items-center  flex-col'>
          <Header></Header>
          <div className=' w-screen h-px mb-20bg-[#1c1b1c]'></div>
          <About></About>
          <Gallery></Gallery>
          <Membership></Membership>
          <Contact ></Contact>
          <Contact2></Contact2>
          <Contact3></Contact3>
        </div>
      </div>
    </>
  )
}

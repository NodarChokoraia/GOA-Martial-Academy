import React from 'react'

import img1 from '../../src/images/battle3.jpg'
import img2 from '../../src/images/footkick.jpg'
import img3 from '../../src/images/battle2.jpg'
import img4 from '../../src/images/battle1.jpg'
import img5 from '../../src/images/fightstance.jpg'
import img6 from '../../src/images/winner.jpg'
import img7 from '../../src/images/main.jpg'
export default function Gallery() {
  return (
    <>
      <div id='gallery' className='container mb-10'>

        <div className=' items-center   max-[1050px]:flex max-[1050px]:flex-col'>
            <div >
                <div className='flex items-center gap-5 mb-6 '>
                    <div className='bg-[#df202e] h-px w-8'></div>
                    <p className='text-[#df202e] tracking-[3px] uppercase text-[14px] font-[Oswald]'>Gallery</p>
                </div>
            </div>
            <h1 className='tracking-tight font-[Oswald] text-white  text-6xl leading-[0.85] uppercase max-[400px]:text-5xl'>Inside the   <span className='text-[#df202e]'>forge.</span>
            </h1>
              <p className='font-[Inter] mt-8 text-lg text-[#93999e] max-[1050px]:text-center'>Photographs from the mat — training, sparring, and competition.</p>
            
        </div>

        <main className=' mt-10 w-full grid gap-2  grid-cols-[fr1_fr1_fr1_fr1] grid-rows-[260px_260px_260px] max-[1050px]:flex max-[1050px]:flex-col max-[1050px]:p-5'>
            <div className='overflow-hidden w-full h-full col-start-1 col-end-3 row-start-1 row-end-3'><img src={img1} alt="" className='object-cover w-full h-full  transition-all  hover:scale-110 '/></div>
            <div className=' overflow-hidden w-full h-full col-start-4 col-end-5 row-start-2 row-end-3'><img src={img2}alt="" className='object-cover w-full h-full transition-all  hover:scale-110'/></div>
            <div className='w-full h-full overflow-hidden col-start-4 col-end-5 row-start-3 row-end-4'><img src={img3} alt="" className='object-cover w-full h-full transition-all  hover:scale-110'/></div>
            <div className='w-full h-full overflow-hidden col-start-1 col-end-2 row-start-3 row-end-4'><img src={img4} alt="" className='object-cover w-full h-full transition-all  hover:scale-110'/></div>
            <div className='w-full h-full overflow-hidden col-start-2 col-end-3 row-start-3 row-end-4'><img src={img5} alt="" className='object-cover w-full h-full transition-all  hover:scale-110'/></div>
            <div className='w-full h-full overflow-hidden col-start-3 col-end-4 row-start-2 row-end-4'><img src={img6} alt="" className='object-cover w-full h-full transition-all  hover:scale-110'/></div>
            <div className='w-full h-full overflow-hidden col-start-3 col-end-5 row-start-1 row-end-2'><img src={img7} alt="" className='object-cover w-full h-full transition-all  hover:scale-110'/></div>
        </main>
      </div>
    </>
  )
}

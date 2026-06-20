import React from 'react'

export default function Contact2() {
  return (
    <>
      <div className='relative w-screen h-fit flex items-center pt-40 pb-40 max-[550px]:pr-5 max-[550px]:pl-5 justify-center'>
        <div className='w-full z-3  h-full'>
            <div className='flex  items-center justify-center flex-col gap-5 '>
                <div class="flex items-center justify-center gap-6 mb-8 text-[#df202e]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    
                </div>
                 <h1 className='tracking-tight font-[Oswald] text-white max-[450px]:text-5xl  max-[350px]:text-4xl text-6xl leading-[0.85] uppercase'>Step on the <span className='text-[#df202e]'>mat.</span>
                </h1>
  
                <p className='font-[Inter] mt-8 text-lg text-center text-[#93999e]'>Your first class is on us. No pressure, no contract — just come <br /> train.</p>
               <div>
                    <button className='bg-[#df202e] mr-5  max-[450px]:mr-1  z-1 pb-3 pl-5 pr-5 pt-3  tracking-[2px] cursor-pointer   uppercase  text-white  font-[Oswald] transition-all duration-500 hover:brightness-85 '>
                                                    
            view plans                                                    
                                                    
                                                </button>
                                                <button className='bg-[#ffffff0a] max-[450px]:pl-1 max-[450px]:pr-1 transition-colors duration-500 cursor-pointer  text-white uppercase  font-[Oswald] pb-3 pt-3 pl-5 pr-5 border tracking-[2px] border-[#646464] hover:border-[#df202e]'> Book Free Trial</button>
               </div>
                                        
            </div>
            
            <div className='absolute w-screen h-px bottom-0 left-0 bg-linear-to-r from-[#1b1e1f] via-[#df202e] to-[#1b1e1f]'></div>
        </div>
      </div>
    </>
  )
}

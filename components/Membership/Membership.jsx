import React from 'react'

export default function Membership() {
  return (
    <>
        <div id='membership' className='container mt-20 mb-20'> 
            <div className='mb-10 items-center   max-[1280px]:flex max-[1280px]:flex-col'>
                <div>
                    <div className='flex items-center gap-5 mb-6'>
                        <div className='bg-[#df202e] h-px w-8'></div>
                        <p className='text-[#df202e] tracking-[3px] uppercase text-[14px] font-[Oswald]'>Membership</p>
                    </div>
                </div>
                <h1 className='tracking-tight font-[Oswald] max-[400px]:text-5xl text-white  text-6xl leading-[0.85] uppercase'>Pick your   <span className='text-[#df202e]'>path.</span>
                </h1>
                <p className='font-[Inter] mt-8 text-lg text-[#93999e] max-[600px]:text-center'>No long contracts. Cancel anytime. First class always free.</p>
            
            </div>

            <main className='w-full flex gap-5 flex-wrap justify-center items-center max-[600px]:p-5'>
                

                <div className='flex-1 max-[1280px]:flex-none max-[1280px]:w-1/2 max-[600px]:w-full p-9 bg-[#131213] border border-[#302a2b]'>
                    <h1 className='uppercase font-[Oswald]  text-[#df202e] text-[30px]'>Intermediate</h1>
                    <p className='font-[Oswald] text-white   text-[40px]'>130  <span className='tracking-wider  text-[16px]   text-[#93999e]'>GEL / month</span></p>
                    <p className='font-[Inter] text-[14px] text-[#93999e]'>Perfect for first-timers stepping <br /> on the mat.</p>
                    <ul className='text-white font-[Inter] text-[15px] mt-3'>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{color:'#df202e'}} className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            2 class per week
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Free intro session
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Locker access
                        </li>
                    </ul>
                   <a href='#contact'>  <button className='bg-[#ffffff0a] transition-colors duration-500 cursor-pointer  text-white uppercase  font-[Oswald] pb-3 mt-10 pt-3 w-full border tracking-[2px] border-[#646464] hover:border-[#df202e]'> start training</button></a>
                                        
                </div>

                <div className='relative max-[1280px]:flex-none max-[1280px]:w-1/2 max-[600px]:w-full flex-1 p-9 bg-[#131213] border border-[#df202e]'>
                    <p className='absolute -top-3 text-white p-2 pr-3 bg-[#df202e] w-fit text tracking-tight flex gap-1 items-center text-[12px] font-[Oswald] justify-center font-bold '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        MOST POPULAR
                    </p>

                    <h1 className='uppercase font-[Oswald]  text-[#df202e] text-[30px]'>Standard</h1>
                    <p className='font-[Oswald] text-white   text-[40px]'>180  <span className='tracking-wider  text-[16px]   text-[#93999e]'>GEL / month</span></p>
                    <p className='font-[Inter] text-[14px] text-[#93999e]'>Our most popular plan. Train your <br /> way.</p>
                    <ul className='text-white font-[Inter] text-[15px] mt-3'>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{color:'#df202e'}} className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            3 class per week
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Free intro session
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Locker access
                        </li>
                    </ul>
                     <a href='#contact'><button className='bg-[#df202e] transition-colors duration-500 cursor-pointer  text-white uppercase  font-[Oswald] pb-3 mt-10 pt-3 w-full tracking-[2px] '> start training</button></a>
                                        
                </div>

                <div className='flex-1 max-[1280px]:flex-none max-[1280px]:w-1/2 max-[600px]:w-full p-9 bg-[#131213] border border-[#302a2b]'>
                    <h1 className='uppercase font-[Oswald]  text-[#df202e] text-[30px]'>Competition</h1>
                    <p className='font-[Oswald] text-white   text-[40px]'>220   <span className='tracking-wider  text-[16px]   text-[#93999e]'>GEL / month</span></p>
                    <p className='font-[Inter] text-[14px] text-[#93999e]'>Perfect for guys who want to win some tropy's </p>
                    <ul className='text-white font-[Inter] text-[15px] mt-3'>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{color:'#df202e'}} className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            4 class per week
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Free intro session
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Locker access
                        </li>
                    </ul>
                     <a href='#contact'><button className='bg-[#ffffff0a] transition-colors duration-500 cursor-pointer  text-white uppercase  font-[Oswald] pb-3 mt-10 pt-3 w-full border tracking-[2px] border-[#646464] hover:border-[#df202e]'> start training</button></a>
                                        
                </div>

                <div className='flex-1 max-[1280px]:flex-none max-[1280px]:w-1/2 max-[600px]:w-full p-9 bg-[#131213] border border-[#302a2b]'>
                    <h1 className='uppercase font-[Oswald]  text-[#df202e] text-[30px]'>for the best</h1>
                    <p className='font-[Oswald] text-white   text-[40px]'>250  <span className='tracking-wider  text-[16px]   text-[#93999e]'>GEL / month</span></p>
                    <p className='font-[Inter] text-[14px] text-[#93999e]'>Perfect for guys who want to be in UFC </p>
                    <ul className='text-white font-[Inter] text-[15px] mt-3'>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{color:'#df202e'}} className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            5 class per week
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Free intro session
                        </li>
                        <li className='flex items-center gap-2 leading-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"style={{color:'#df202e'}}  className='float-left mr-2'  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-primary mt-1 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                            Locker access
                        </li>
                    </ul>
                     <a href='#contact'><button className='bg-[#ffffff0a] transition-colors duration-500 cursor-pointer  text-white uppercase  font-[Oswald] pb-3 mt-10 pt-3 w-full border tracking-[2px] border-[#646464] hover:border-[#df202e]'> start training</button></a>
                                        
                </div>
            </main>
        </div>
    </>
  )
}

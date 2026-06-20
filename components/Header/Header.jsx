import React, { useEffect, useState } from 'react'
import logo from '../../src/images/logo.jpg'
import homescreen from '../../src/images/hero-fighter.jpg'
export default function Header() {
    const [scroolNoScrool,setScroolNoScrool] = useState(false)
    useEffect(()=> {
        addEventListener('scroll',()=>{
            setScroolNoScrool(window.scrollY >1? true : false)
            
        }   ) 
    },[])
    const[isOpen,setIsOpen] = useState(false)
    return (
        <>
            <nav className={`${scroolNoScrool ? 'nav' : ''} fixed max-[1200px]:flex-col  top-0 z-4 w-screen flex justify-center items-center pt-5 pb-5 `}>
               <div className='container flex items-center ralative max-[1200px]:hidden'>
                   <div className='w-fit h-fit flex gap-3 z-1 items-center cursor-pointer' onClick={() => {window.scroll({
                                        top:0,
                                    })}}>
                    <div className='group w-16 h-16 border-4 border-[#df202e]  bg-[#df202e] rounded-[10px] flex items-center justify-center transform rotate-45 transition cursor-pointer hover:rotate-60 ' >
                        <div  className='  w-14 h-14  bg-[#060809] rounded-[10px] flex items-center justify-center   transition-[0s] group-hover:rotate-[-15deg]'><p className='transform -rotate-45 text-[#df202e] text-[25px] leading-6 font-bold font-[Oswald]  '>G</p></div>
                    </div>
                    <div>
                        <p className='text-white  text-[25px] leading-6 font-bold font-[Oswald] w-50'>GOA - Martial Arts</p>
                        <p className='text-[#797f83] tracking-[3px] font-[Oswald]'>TBILISI</p>
                    </div>
                   </div>

                   
                        
                            <div className='absolute w-full h-full left-0  top-0 flex items-center justify-center'>
                                <ul className='flex gap-10 items-center  mr-auto ml-auto'>
                                    <a href="#" onClick={() => {window.scroll({
                                        top:0,
                                       
                                    })}} className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 ease-in-out font-[Oswald] hover:text-white'>HOME</a>
                                    <a href="#about" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 ease-in-out font-[Oswald] hover:text-white'>ABOUT</a>
                                    <a href="#gallery" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 ease-in-out font-[Oswald] hover:text-white'>GALLERY</a>
                                    <a href="#membership" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 ease-in-out font-[Oswald] hover:text-white'>MEMBERSHIP</a>
                                    <a href="#" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 ease-in-out font-[Oswald] hover:text-white'>CONTACT</a>
                                </ul>
                            </div>
                        
                        <button className='bg-[#df202e] pt-3 ml-auto z-1 pb-3 pl-7 pr-7 tracking-[2px] text-[20px] cursor-pointer  text-white  font-[Oswald] transition-all duration-500 hover:brightness-85'>FREE TRAIL</button>
               </div>

                <div className='hidden container max-[850px]:pl-5 max-[850px]:pr-5  max-[1200px]:flex'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-fit h-fit flex gap-3 z-1 mr-auto items-center cursor-pointer' onClick={() => {window.scroll({
                                            top:0,
                                    })}}>
                        <div className='group w-16 h-16 border-4 border-[#df202e]  bg-[#df202e] rounded-[10px] flex items-center justify-center transform rotate-45 transition cursor-pointer hover:rotate-60 ' >
                            <div  className='  w-14 h-14  bg-[#060809] rounded-[10px] flex items-center justify-center   transition-[0s] group-hover:rotate-[-15deg]'><p className='transform -rotate-45 text-[#df202e] text-[25px] leading-6 font-bold font-[Oswald]  '>G</p></div>
                        </div>
                        <div>
                            <p className='text-white  text-[25px] leading-6 font-bold font-[Oswald] w-50'>GOA - Martial Arts</p>
                            <p className='text-[#797f83] tracking-[3px] font-[Oswald]'>TBILISI</p>
                        </div>
                       </div>
                        <button className='text-white text-[30px]' onClick={() => setIsOpen(prev => !prev)}>
                            {
                                isOpen?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                            }
                        </button>
                    </div>
                   
                        

                            <div className={`${isOpen?'':'hidden'} overflow-y-scroll pt-30 absolute h-[calc(100vh-104px)] p-10 w-screen  bg-[#0e1115] border border-[#222629] left-0  top-full flex items-center justify-center`}>
                                <ul className='flex gap-5 items-center max-[1200px]:flex-col max-[1200px]:items-start max-[1200px]:container max-[1200px]:flex-1'>
                                    <a href="#" onClick={() => {window.scroll({
                                        top:0,
                                     
                                    })}} className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 ease-in-out font-[Oswald] border-[#18191b] hover:text-white max-[1200px]:text-white max-[1200px]:border-b max-[1200px]:w-full max-[1200px]:pt-3 max-[1200px]:pb-3'>HOME</a>
                                    <a href="#about" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 border-[#18191b] ease-in-out font-[Oswald] hover:text-white max-[1200px]:text-white max-[1200px]:border-b max-[1200px]:w-full max-[1200px]:pt-3 max-[1200px]:pb-3'>ABOUT</a>
                                    <a href="#gallery" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 border-[#18191b] ease-in-out font-[Oswald] hover:text-white max-[1200px]:text-white max-[1200px]:border-b max-[1200px]:w-full max-[1200px]:pt-3 max-[1200px]:pb-3'>GALLERY</a>
                                    <a href="#membership" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500  border-[#18191b] ease-in-out font-[Oswald] hover:text-white max-[1200px]:text-white max-[1200px]:border-b max-[1200px]:w-full max-[1200px]:pt-3 max-[1200px]:pb-3'>MEMBERSHIP</a>
                                    <a href="#" className='text-[#797f83] tracking-[1px] text-[18px] transition-colors duration-500 border-[#18191b] ease-in-out font-[Oswald] hover:text-white max-[1200px]:text-white max-[1200px]:border-b max-[1200px]:w-full max-[1200px]:pt-3 max-[1200px]:pb-3'>CONTACT</a>
                                    <button className='bg-[#df202e]  pt-3  z-1 pb-3 pl-7 pr-7 tracking-[2px] text-[20px] cursor-pointer  text-white  font-[Oswald] transition-all duration-500 hover:brightness-85 max-[1200px]:w-full max-[1200px]:text-white'>FREE TRAIL</button>
                                </ul>
                            
                        
                        
                        </div>
                </div>

            </nav>
            <header className='relative w-screen min-h-screen pb-10'>
                <div className=' w-screen min-h-screen flex items-center justify-center flex-col   '>
                    <img src={homescreen} alt=""  className='w-screen  -z-1 h-full absolute left-0 top-0 bg-cover bg-center brightness-40 selection:bg-none'/>
                    <div  className='w-screen min-h-screen  flex items-center justify-center ' >
                        <div className='container min-h-screen  '>
                            <div className='w-full min-h-screen flex  items-center '>
                                <div className='mt-20 items-center justify-center flex-col max-[850px]:flex max-[850px]:w-full  max-[500px]:p-5'>
                                    <div className='flex items-center gap-5 mb-6'>
                                        <div className='bg-[#df202e] h-px w-15'></div>
                                        <p className='text-[#df202e] tracking-[3px] text-[14px] font-[Oswald]'>TBILISI · GEORGIA</p>
                                    </div>
                                        <h1 className='tracking-tight max-[430px]:text-4xl max-[340px]:text-3xl max-[850px]:text-center max-[850px]:text-6xl font-[Oswald] text-white  text-8xl leading-[0.85] uppercase max-[500px]:text-5xl'>Build  <span className='text-[#df202e]'>Discipline.</span> <br />
                                            Develop <span className='text-transparent' style={{WebkitTextStroke:'1px white'}}>Strength.</span> <br />
                                            Achieve Your Goals.
                                        </h1>
                                        <p className='font-[Inter] mt-8 text-lg text-[#93999e] max-[850px]:text-center' >Professional MMA and martial arts training in Tbilisi. Walk in <br /> a beginner. Walk out a fighter.</p>
                                        <div className='flex gap-5 mt-10 max-[500px]:flex-col max-[500px]:w-full'>
                                            <button className='bg-[#df202e] group  flex pt-3 max-[500px]:w-full max-[500px]:justify-center  z-1 pb-3   tracking-[2px] cursor-pointer   items-center gap-2 uppercase  text-white  font-[Oswald] transition-all duration-500 hover:brightness-85 '>
                                                <div className='flex  w-53 h-full items-center justify-center   transition-all duration-500'>
                                                    Start Training
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 ml-2 group-hover:translate-x-1 transition' viewBox="0 0 640 640"><path fill="rgb(255, 255, 255)" d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                                                </div>
                                            </button>
                                            <button className='bg-[#ffffff0a] max-[500px]:w-full transition-colors duration-500 cursor-pointer  text-white uppercase  font-[Oswald] pb-3 pt-3 w-53 border tracking-[2px] border-[#646464] hover:border-[#df202e]'> Book Free Trial</button>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section className='w-screen h-fit border-3 border-[#0c1013b3] bg-[#060809] gap-8 text-lg font-[Oswald] tracking-[0.4rem] pb-4 pt-4 flex items-center overflow-hidden'>
                
                    <div className="slider flex gap-8 w-max">
                        <div className='flex gap-8 shrink-0 '>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                        </div>
    
    
                        <div className='flex gap-8 shrink-0 '>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                            <p className=' flex items-center gap-8 text-white'>
                                <span>WORK.</span>
                                <span className='text-[#df202e]'>LEARN.</span>
                                <span>FIGHT.</span>
                                <span className='text-[#df202e]'>×</span>
                            </p>
                        </div>
                    </div>
            </section>

            <div className='flex w-screen h-full mb-20 mt-20 border-l-30 border-r-30 border-[#1d1c1d] '>
                
                <div className='w-full h-full flex flex-wrap'>
                    <div className='h-full flex-1 p-5 bg-[#060809] flex flex-col items-center justify-center gap-5    transition border-[#241c1e] border-r hover:bg-[#0c1013] max-[1060px]:w-1/2 max-[1060px]:flex-none max-[1060px]:border-b max-[600px]:w-full'>
                        <p className='text-[#df202e] text-[60px] uppercase font-[Oswald] '>1,200+</p>
                        <p className='font-[Inter]  text-lg text-[#93999e] uppercase'>Students Trained</p>
                    </div>
                    <div className='h-full flex-1 p-5 bg-[#060809] flex flex-col items-center justify-center gap-5    transition border-[#241c1e] border-r hover:bg-[#0c1013] max-[1060px]:w-1/2 max-[1060px]:flex-none max-[1060px]:border-b max-[600px]:w-full'>
                        <p className='text-[#df202e] text-[60px] uppercase font-[Oswald] '>87</p>
                        <p className='font-[Inter]  text-lg text-[#93999e] uppercase'>Competition Medals</p>
                    </div>
                    <div className='h-full flex-1 p-5 bg-[#060809] flex flex-col items-center justify-center gap-5    transition border-[#241c1e] border-r hover:bg-[#0c1013] max-[1060px]:w-1/2 max-[1060px]:flex-none max-[600px]:w-full'>
                        <p className='text-[#df202e] text-[60px] uppercase font-[Oswald] '>9</p>
                        <p className='font-[Inter]  text-lg text-[#93999e] uppercase'>Years of Experience</p>
                    </div>
                    <div className='h-full flex-1 p-5 bg-[#060809] flex flex-col items-center justify-center gap-5    transition border-[#241c1e] border-r hover:bg-[#0c1013] max-[1060px]:w-1/2 max-[1060px]:flex-none max-[600px]:w-full'>
                         <p className='text-[#df202e] text-[60px] uppercase font-[Oswald] '>42</p>
                        <p className='font-[Inter]  text-lg text-[#93999e] uppercase'>Weekly Sessions</p>
                    </div>
                </div>
                
            </div>
            
    </>
  )
}
// moon

//
//sun

//

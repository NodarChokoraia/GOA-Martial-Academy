import React from 'react'

export default function About() {
  return (
    <>
        <div className='w-screen h-screen fixed top-0 left-0 -z-10'>
            <div className='w-screen h-screen relative'>
                <div className='w-[30%] h-[30%] bg-[#df202da2] absolute blur-[1000px] top-0 left-0'></div>
                <div className='w-[30%] h-[30%] bg-[#df202da2] absolute blur-[1000px] bottom-0 right-0'></div>
            </div>
        </div>


        <main id='about' className='w-full mb-20'>

          <div className='w-full flex justify-between max-[1300px]:flex-col'>
            <div className='flex flex-col  max-[1300px]:text-center max-[650px]:p-5 '>

              <div>
                <div className='flex w-full  items-center gap-5 mb-6 max-[1300px]:justify-center'>
                  <div className='bg-[#df202e] h-px w-8'></div>
                  <p className='text-[#df202e] tracking-[3px] uppercase text-[14px] font-[Oswald] max-[1300px]:text-center'>About / Our Mission</p>
                </div>
              </div>

              <h1 className='tracking-tight font-[Oswald] text-white  text-6xl leading-[0.85] uppercase max-[500px]:text-5xl max-[400px]:text-4xl'>Build people.  <span className='text-[#df202e] '>Forge <br /> fighters.</span>
              </h1>

              <p className='font-[Inter] mt-8 text-lg text-[#93999e]'>Goal-Oriented Academy exists to develop disciplined, confident, <br /> capable human beings through the practice of mixed martial arts. <br /> We're not a gym. We're a forge.</p>
              
              <p className='font-[Inter] mt-8 text-lg text-[#93999e]'>Every program — from kids' classes to our competition team — runs on the <br /> same principle: hard work, taught well, repeated daily, produces real <br /> transformation. Inside the cage and outside it.</p>

            </div>

            <div className='flex flex-col  max-[1300px]:text-center max-[1300px]:mt-10 max-[650px]:p-5'>

              <div>
                <div className='flex w-full  items-center gap-5 mb-6 max-[1300px]:justify-center'>
                  <div className='bg-[#df202e] h-px w-8'></div>
                  <p className='text-[#df202e] tracking-[3px] text-[14px] uppercase font-[Oswald]'>Philosophy</p>
                </div>
              </div>

              <h1 className='tracking-tight font-[Oswald] text-white  text-6xl leading-[0.85] uppercase max-[500px]:text-5xl max-[450px]:text-4xl max-[350px]:text-3xl'>Discipline is<span className='text-[#df202e]'>freedom.</span>
              </h1>

              <p className='font-[Inter] mt-8 text-lg text-[#93999e]'>Most people search for motivation. Fighters build discipline instead. <br /> Discipline is what shows up when motivation runs out — and it <br /> always does.</p>
              
              <p className='font-[Inter] mt-8 text-lg text-[#93999e]'>At GOA, we teach the small disciplines: bowing onto the mat, finishing the <br /> round, controlling your breath, respecting your training partner. They <br /> compound into something powerful.</p>

            </div>

          </div>

          <div className='w-full flex-wrap items-center max-[1300px]:gap-10 max-[450px]:p-5 justify-center flex h-fit mt-40 mb-20 '>
            <div className='flex-1 max-[1300px]:flex-none max-[1300px]:w-fit border-l-4 h-full pr-5 border-[#df202e] pl-5'>
                <p className='text-[#df202e] text-[40px] uppercase font-[Oswald] '>2016</p>
                <p className='font-[Inter]  text-lg text-[#93999e] '>Founded in a 60m² basement with two heavy <br /> bags and a borrowed mat.</p>
            </div>
            <div className='flex-1 max-[1300px]:flex-none max-[1300px]:w-fit border-l-4 h-full pr-5 border-[#df202e] pl-5'>
                <p className='text-[#df202e] text-[40px] uppercase font-[Oswald] '>2019</p>
                <p className='font-[Inter]  text-lg text-[#93999e] '>Moved to our current 600m² home in central <br /> Tbilisi. Launched competition team.</p>
            </div>
            <div className='flex-1 max-[1300px]:flex-none max-[1300px]:w-fit border-l-4 h-full pr-5 border-[#df202e] pl-5'>
                <p className='text-[#df202e] text-[40px] uppercase font-[Oswald] '>2024</p>
                <p className='font-[Inter]  text-lg text-[#93999e] '>1,200+ students trained. 87 medals. National <br /> and European champions on the roster.</p>
            </div>

          </div>

          <div className='flex flex-col items-center justify-center gap-10'>
            <div className='w-fit h-fit flex flex-col items-center justify-center'>
              <div className='flex items-center gap-5 mb-6'>
                <div className='bg-[#df202e] h-px w-8'></div>
                <p className='text-[#df202e] tracking-[2px] uppercase text-[14px] font-[Oswald]'>What we stand for</p>
              </div>
              <h1 className='tracking-tight font-[Oswald] text-white  text-6xl leading-[0.85] uppercase'>Our<span className='text-[#df202e]'>Values.</span>
              </h1>
            </div>


            <div className='w-full h-fit flex flex-wrap items-center justify-center gap-5 max-[700px]:p-5'>
              <div className='flex-1 flex flex-col max-[900px]:flex-none max-[900px]:w-1/2 max-[700px]:w-full items-center justify-center pt-5 pb-5  bg-[#131213] border transition h-60 border-[#2a2a2b] hover:border-[#df202e]'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=" text-[#df202e] mb-4" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                <h1 className='text-white font-[Oswald] uppercase text-2xl leading-[0.85]'>Respect</h1>
                <p className='font-[Inter] mt-4 text-[16px] text-[#93999e] text-center'>Every member, every<br /> coach, every  rep — earned <br /> and given.</p>
              </div>
              <div className='flex-1 flex flex-col max-[900px]:flex-none max-[900px]:w-1/2 max-[700px]:w-full items-center justify-center pt-5 pb-5 bg-[#131213] border transition h-60 border-[#2a2a2b] hover:border-[#df202e]'> 
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#df202e] mb-4" aria-hidden="true"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
                <h1 className='text-white font-[Oswald] uppercase text-2xl leading-[0.85]'>Hard Work</h1>
                <p className='font-[Inter] mt-4 text-[16px] text-[#93999e] text-center'>There are no shortcuts. <br /> The mat shows what you <br /> put in.</p>
              </div>
              <div className='flex-1 flex flex-col max-[900px]:flex-none max-[900px]:w-1/2 max-[700px]:w-full items-center justify-center pt-5 pb-5 bg-[#131213] border transition h-60 border-[#2a2a2b] hover:border-[#df202e]'> 
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#df202e] mb-4" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <h1 className='text-white font-[Oswald] uppercase text-2xl leading-[0.85]'>Focus</h1>
                <p className='font-[Inter] mt-4 text-[16px] text-[#93999e] text-center'>Distraction loses fights. <br /> We train attention as a <br /> skill.</p>
              </div>
              <div className='flex-1 flex flex-col max-[900px]:flex-none max-[900px]:w-1/2 max-[700px]:w-full items-center justify-center  pt-5 pb-5 bg-[#131213] border transition h-60 border-[#2a2a2b] hover:border-[#df202e]'> 
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#df202e] mb-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                <h1 className='text-white font-[Oswald] uppercase text-2xl leading-[0.85]'>Teamwork</h1>
                <p className='font-[Inter] mt-4 text-[16px] text-[#93999e] text-center'>We rise together. Iron <br /> sharpens iron, every <br /> session.</p>
              </div> 
              <div className='flex-1 flex flex-col max-[900px]:flex-none max-[900px]:w-1/2 max-[700px]:w-full items-center justify-center  pt-5 pb-5 bg-[#131213] border transition h-60 border-[#2a2a2b] hover:border-[#df202e]'> 
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#df202e] mb-4" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
                <h1 className='text-white font-[Oswald] uppercase text-2xl leading-[0.85]'>Courage</h1>
                <p className='font-[Inter] mt-4 text-[16px] text-[#93999e] text-center'>Showing up scared is <br /> still showing up. We <br /> honour that.</p>
              </div>
            </div>
          </div>
        </main>

    </>
  )
}

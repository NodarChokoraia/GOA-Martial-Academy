import React from 'react'

export default function Contact() {
  return (
    <>
      <div id='contact' className='w-screen bg-[#0b0b0d] flex items-center justify-center   pb-30 pt-30 border border-[#1f1f20]'>
        <div className='container h-full flex justify-between max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-10 max-[700px]:p-5'>
          <div className='w-[48%] h-fit max-[700px]:w-full'>
            <div className='pb-10'>
  
                <div>
                  <div className='flex items-center gap-5 mb-6'>
                    <div className='bg-[#df202e] h-px w-8'></div>
                    <p className='text-[#df202e] tracking-[3px] uppercase text-[14px] font-[Oswald]'>Contact</p>
                  </div>
                </div>
  
                <h1 className='tracking-tight font-[Oswald] text-white  text-6xl leading-[0.85] uppercase max-[1050px]:text-4xl max-[510px]:text-5xl max-[430px]:text-4xl'>Come train  <span className='text-[#df202e]'>with us.</span>
                </h1>
  
                <p className='font-[Inter] mt-8 text-lg text-[#93999e]'>Walk in, message us, or call. We'll get you on the mat.</p>
                
                
              </div>

              <div>
                <form action="" onSubmit={() => alert('Your message has ben sent we will concact you soon')} className='w-full gap-5 grid grid-cols-[1fr_1fr] grid-rows-[50px_50px_50px_50px_50px_50px]'>
                  <input className='bg-[#0a0a0b] w-full h-full row-start-1 row-end-2 col-start-1 col-end-2 border border-[#1d1c1e] p-3 font-[Oswald]  text-[#93999e] focus:outline outline-[#df202e] ' required type="text" name="" id="" placeholder='Name'/>
                  <input className='bg-[#0a0a0b] w-full h-full row-start-1 row-end-2 col-start-2 col-end-3 border border-[#1d1c1e] p-3 font-[Oswald]  text-[#93999e] focus:outline outline-[#df202e] ' type="email" required  name="" id="" placeholder='Email'/>
                  <input className='bg-[#0a0a0b] w-full h-full row-start-2 row-end-3 col-start-1 col-end-3 border border-[#1d1c1e] p-3 font-[Oswald]  text-[#93999e] focus:outline outline-[#df202e] ' type="text" required  placeholder='Subject'/>
                  <textarea className='bg-[#0a0a0b] resize-none w-full h-full row-start-3 row-end-6 text-start col-start-1 col-end-3 border border-[#1d1c1e] p-3 font-[Oswald]  text-[#93999e] focus:outline outline-[#df202e] ' required  placeholder='Your message'/>
                  <button type="submit"  className='bg-[#df202e] col-start-1 col-end-3  z-1 w-full tracking-[2px]  cursor-pointer  text-white  font-[Oswald] transition-all duration-500 hover:brightness-85'>SEND MESSAGE</button>
                </form>
              </div>
          </div>

          <div className='w-[48%] h-full max-[700px]:w-full'>
            <div className='bg-[#161517] border w-full border-[#2c2c2f] p-7'>
              <h1 className='tracking-tight font-[Oswald]  text-[#df202e] text-4xl leading-[0.85] uppercase max-[350px]:text-3xl'>VISIT THE ACADEMY
              </h1>
              <div className='w-full border-b border-b-[#282729] pb-7 pt-7'>

                <div className='flex gap-3 mb-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{color:'#df202e'}} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <p className='text-white font-[Oswald] text-[15px]'>
                    14 Pekini Ave, Tbilisi 0160
                    <br />
                    <span className='text-[#93999e] font-[Inter] text-[16px]'>Georgia · Saburtalo District</span>
                  </p>
                </div>

                <div className='flex gap-3 mb-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{color:'#df202e'}} stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  <p className='text-white font-[Oswald] text-[15px]'>
                    +995 555 123 456
                    <br />
                    <span className='text-[#93999e] font-[Inter] text-[16px]'>For costumer services</span>
                  </p>
                </div>

                <div className='flex gap-3 '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style={{color:'#df202e'}} stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                  <p className='text-white font-[Oswald] text-[15px]'>
                    train@goa.ge
                    <br />
                    <span className='text-[#93999e] font-[Inter] text-[16px]'>For trial bookings & inquiries</span>
                  </p>
                </div>
              </div>

              <div>
                <p className='font-[Oswald] mt-3 mb-3 text-1xl tracking-wider text-[#93999e]'>FOLLOW</p>
                <div class="flex gap-3">
                  <a href="https://www.instagram.com/goa_martial_arts/" class="h-11 w-11 flex text-white items-center justify-center border border-[#272729] hover:border-[#df202e] hover:text-[#df202e] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.facebook.com/nika1keshelava" class="h-11 w-11 flex text-white items-center justify-center border border-[#272729] hover:border-[#df202e] hover:text-[#df202e] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.youtube.com/@GOA-Martial_Arts" class="h-11 w-11 flex text-white items-center justify-center border border-[#272729] hover:border-[#df202e] hover:text-[#df202e] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.6218362362742!2d44.797097411030805!3d41.77955957113282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d7c3a6495f7%3A0x519568c7f7efc506!2sGoal-Oriented%20Academy%20%E2%80%A2%20GOA%20-%20Martial%20Arts!5e1!3m2!1sen!2sge!4v1781811482753!5m2!1sen!2sge"
            className="border-0 mt-10 w-full h-120"
            loading="lazy"
            allowFullScreen
          />

          </div>
        </div>
      </div>
      
    </>
  )
}

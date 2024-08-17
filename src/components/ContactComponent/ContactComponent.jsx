import React from 'react'

const ContactComponent = () => {
  return (
    <div>
      <section className='py-24'>
        <div className="max-w-container mx-auto">
          <div className="flex justify-center px-4 md:px-0">
            <div className="md:text-center">
              <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-4xl'>Contact Us</h2>
              <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-2 md:w-[63%] md:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
          <div className="mt-8 bg-[#F4F6FC] md:mx-20 w-full pt-6 pb-16 md:px-6">
            <div className="md:flex flex-wrap justify-between px-4 md:px-0">
              <div className="md:w-[48%] mt-4">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="">Name</label>
                <input className='mt-2 py-3 px-4 md:px-6 block w-full rounded-md border border-[#e2e3e9] bg-transparent outline-none font-poppins font-normal text-[#282938] text-base' type="text" placeholder='Enter your name' />
              </div>
              <div className="md:w-[48%] mt-4">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="">Email</label>
                <input className='mt-2 py-3 px-4 md:px-6 block w-full rounded-md border border-[#e2e3e9] bg-transparent outline-none font-poppins font-normal text-[#282938] text-base' type="email" placeholder='Enter your Emial' />
              </div>
              <div className="md:w-[48%] mt-4">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="">Subject</label>
                <input className='mt-2 py-3 px-4 md:px-6 block w-full rounded-md border border-[#e2e3e9] bg-transparent outline-none font-poppins font-normal text-[#282938] text-base' type="text" placeholder='Provide context' />
              </div>
              <div className="md:w-[48%] mt-4">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="">Subject</label>
                <input className='mt-2 py-3 px-4 md:px-6 block w-full rounded-md border border-[#e2e3e9] bg-transparent outline-none font-poppins font-normal text-[#282938] text-base' type="text" placeholder='Select Subject' />
              </div>
            </div>
            <div className="mt-4 px-4 md:px-0">
              <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="">Message</label>
              <textarea className='mt-2 py-3 h-28 px-4 md:px-6 block w-full rounded-md border border-[#e2e3e9] bg-transparent outline-none font-poppins font-normal text-[#282938] text-base' name="" id="" placeholder='Write your  question here'></textarea>
            </div>
            <div className="mt-12 px-4 md:px-0">
              <a className='py-4 px-10 rounded-full text-base font-poppins text-white bg-black duration-500' href="#">Send Messege</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactComponent
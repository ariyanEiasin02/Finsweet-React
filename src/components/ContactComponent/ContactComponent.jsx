import React from 'react'

const ContactComponent = () => {
  return (
    <div>
      <section className='py-12 md:py-20'>
        <div className="max-w-container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center">
              <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-4xl'>Contact Us</h2>
              <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-2 md:w-[63%] w-full mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#F4F6FC]  w-full p-6 md:px-10 rounded-lg shadow-md">
            <div className="md:flex flex-wrap justify-between gap-y-6">
              <div className="md:w-[48%]">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="name">Name</label>
                <input
                  id="name"
                  className='mt-2 py-3 px-4 block w-full rounded-md border border-[#e2e3e9] bg-transparent font-poppins text-[#282938] text-base outline-none'
                  type="text"
                  placeholder='Enter your name'
                />
              </div>
              <div className="md:w-[48%]">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="email">Email</label>
                <input
                  id="email"
                  className='mt-2 py-3 px-4 block w-full rounded-md border border-[#e2e3e9] bg-transparent font-poppins text-[#282938] text-base outline-none'
                  type="email"
                  placeholder='Enter your email'
                />
              </div>

              <div className="md:w-[48%]">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className='mt-2 py-3 px-4 block w-full rounded-md border border-[#e2e3e9] bg-transparent font-poppins text-[#282938] text-base outline-none'
                  type="text"
                  placeholder='Provide context'
                />
              </div>

              <div className="md:w-[48%]">
                <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="topic">Topic</label>
                <input
                  id="topic"
                 className='mt-2 py-3 px-4 block w-full rounded-md border border-[#e2e3e9] bg-transparent font-poppins text-[#282938] text-base outline-none'
                  type="text"
                  placeholder='Select topic'
                />
              </div>
            </div>

            <div className="mt-6">
              <label className='font-poppins font-semibold text-[#282938] text-xl' htmlFor="message">Message</label>
              <textarea
                id="message"
                className='mt-2 py-3 px-4 h-48 block w-full rounded-md border border-[#e2e3e9] bg-transparent font-poppins text-[#282938] text-base outline-none'
                placeholder='Write your question here'
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                className='py-4 px-10 rounded-full text-base font-poppins text-white bg-gradient-to-r from-[#2405F2] to-[#7209B7] hover:shadow-lg transition-all duration-500'
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactComponent

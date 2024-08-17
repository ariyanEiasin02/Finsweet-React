import React from 'react'
import aboutBanner from '../../assets/aboutBanner.png'
const AboutBanner = () => {
  return (
    <div>
        <section className='py-24'>
            <div className="max-w-container mx-auto">
                <div className="flex px-4 md:px-0 flex-col-reverse md:flex-row justify-between items-center">
                    <div className="md:w-2/4 mt-8 md:mt-0">
                        <span className='font-poppins font-medium text-[#282938] text-base'>About us</span>
                        <h2 className='md:mt-4 mt-2 font-poppins font-semibold text-[#282938] text-3xl md:text-5xl leading-[40px] nd:leading-[55px]'>Our designs solve problems</h2>
                        <p className='md:mt-8 mt-4 font-poppins font-normal text-[#282938] text-sm md:text-base w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className="md:w-2/4">
                        <img className='rounded-lg' src={aboutBanner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutBanner
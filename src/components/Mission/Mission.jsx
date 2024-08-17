import React from 'react'
import inpriceOne from '../../assets/inpriceOne.png'
import inpriceTwo from '../../assets/inprice.png'
const Mission = () => {
  return (
    <div>
        <section className='py-24 bg-[#eef4fa]'>
            <div className="max-w-container mx-auto">
                <div className="px-4 md:px-0 flex flex-col-reverse md:flex-row justify-between gap-x-8 items-center">
                    <div className="md:w-2/4 mt-6 md:mt-0">
                        <span className='font-poppins font-medium text-[#282938] text-base'>Our Mission</span>
                        <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-2xl md:text-3xl'>Inspire, Innovate, Share</h2>
                        <p className='mt-4 font-poppins font-normal text-[#282938] text-base md:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="md:w-2/4">
                        <img className='rounded-lg' src={inpriceOne} alt="" />
                    </div>
                </div>
                <div className="md:flex px-4 md:px-0 mt-14 justify-between gap-x-8 items-center">
                    <div className="md:w-2/4">
                        <img className='rounded-lg' src={inpriceTwo} alt="" />
                    </div>
                    <div className="md:w-2/4 mt-6 md:mt-0">
                        <span className='font-poppins font-medium text-[#282938] text-base'>Our Mission</span>
                        <h2 className='mt-2 md:ml-4 font-poppins font-semibold text-[#282938] text-xl md:text-3xl'>Laser focus</h2>
                        <p className='mt-4 md:ml-4 font-poppins font-normal text-[#282938] text-base w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Mission
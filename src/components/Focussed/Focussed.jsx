import React from 'react'
import about from '../../assets/about.png'
const Focussed = () => {
    return (
        <div>
            <section>
                <div className="max-w-container mx-auto">
                    <div className=" bg-[#f4f5f5] py-12 md:px-8 px-4">
                    <span className='font-poppins font-medium text-[#282938] text-base'>Who we are</span>
                    <div className="md:flex justify-between">
                        <div className="md:w-2/4">
                            <h3 className='mt-2 font-poppins font-semibold text-[#282938] text-xl md:text-3xl'>Goal focussed</h3>
                            <p className='md:mt-6 mt-4 font-poppins font-normal text-[#282938] md:text-base text-sm w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="md:w-2/4 mt-4 md:mt-0">
                            <h3 className='mt-2 font-poppins font-semibold text-[#282938] text-xl md:text-3xl'>Continuous improvement</h3>
                            <p className='md:mt-6 mt-4 font-poppins font-normal text-[#282938] text-sm md:text-base w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
                    </div>
                    </div>
                    <div className="">
                        <img src={about} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Focussed
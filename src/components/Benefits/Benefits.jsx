import React from 'react'
import { MdTimer } from 'react-icons/md'
import { SiLibreofficewriter } from "react-icons/si";
import { FaPenRuler } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";

const Benefits = () => {
    return (
        <div>
            <section className='pt-12'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-center">
                        <h2 className='text-center px-4 md:px-0 md:w-[40%] font-poppins font-semibold text-[#282938] text-2xl md:text-4xl'>The benefits of working with us</h2>
                    </div>
                    <div className="md:flex px-4 md:px-0 justify-between mt-12">
                    <div className="md:w-[32%] mt-6 md:mt-0 bg-[#f4f6fc] rounded-xl py-8 px-6">
                        <span><SiLibreofficewriter  className='text-2xl md:text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-xl md:text-2xl text-black font-meduim mt-4'>Customize with ease</h4>
                        <p className='mt-2 font-poppins text-sm md:text-base text-[#282938] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                    <div className="md:w-[32%] mt-6 md:mt-0 bg-[#f4f6fc] rounded-xl py-8 px-6">
                        <span><FaPenRuler className='text-2xl md:text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-xl md:text-2xl text-black font-meduim mt-4'>Perfectly Responsive</h4>
                        <p className='mt-2 font-poppins text-sm md:text-base text-[#282938] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                    <div className="md:w-[32%] mt-6 md:mt-0 bg-[#f4f6fc] rounded-xl py-8 px-6">
                        <span><FaUsers className='text-2xl md:text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-xl md:text-2xl text-black font-meduim mt-4'>Friendly Support</h4>
                        <p className='mt-2 font-poppins text-sm md:text-base text-[#282938] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Benefits
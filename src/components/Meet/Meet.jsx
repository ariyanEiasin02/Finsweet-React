import React from 'react'
import meetOne from '../../assets/team.png'
import meetTwo from '../../assets/team01.png'
import meetThree from '../../assets/team02.png'
import meetFour from '../../assets/team03.png'
import { FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
const Meet = () => {
  return (
    <div>
        <section className='md:py-24 py-12 bg-[#f4f6fc]'>
            <div className="max-w-container mx-auto">
               <div className="flex justify-center">
                    <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-4xl'>Meet our team</h2>
               </div>
               <div className="md:flex px-4 md:px-0 justify-between gap-x-8 mt-12">
                    <div className="md:w-[24%] bg-white py-6 rounded-lg">
                        <div className="w-[100px] h-[100px] mx-auto relative group">
                            <img className='w-full h-full' src={meetOne} alt="" />
                            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500 bg-team w-full h-full gap-x-2 rounded-full flex items-end justify-center">
                                <a className='text-base text-white mb-6' href="#"><FaFacebookF/></a>
                                <a className='text-base text-white mb-6' href="#"><FaTwitter /></a>
                                <a className='text-base text-white mb-6' href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className='mt-4 font-poppins font-medium text-[#282938] text-xl'>John Smith</h4>
                            <span className='font-poppins font-light text-[#282938] text-sm'>CEO</span>
                        </div>
                    </div>
                    <div className="md:w-[24%] bg-white py-6 mt-6 md:mt-0 rounded-lg">
                        <div className="w-[100px] h-[100px] mx-auto relative group">
                            <img className='w-full h-full' src={meetTwo} alt="" />
                            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500 bg-team w-full h-full gap-x-2 rounded-full flex items-end justify-center">
                                <a className='text-base text-white mb-6' href="#"><FaFacebookF/></a>
                                <a className='text-base text-white mb-6' href="#"><FaTwitter /></a>
                                <a className='text-base text-white mb-6' href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className='mt-4 font-poppins font-medium text-[#282938] text-xl'>Simon Adams</h4>
                            <span className='font-poppins font-light text-[#282938] text-sm'>CTO</span>
                        </div>
                    </div>
                    <div className="md:w-[24%] bg-white py-6 mt-6 md:mt-0 rounded-lg">
                        <div className="w-[100px] h-[100px] mx-auto relative group">
                            <img className='w-full h-full' src={meetThree} alt="" />
                            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500 bg-team w-full h-full gap-x-2 rounded-full flex items-end justify-center">
                                <a className='text-base text-white mb-6' href="#"><FaFacebookF/></a>
                                <a className='text-base text-white mb-6' href="#"><FaTwitter /></a>
                                <a className='text-base text-white mb-6' href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className='mt-4 font-poppins font-medium text-[#282938] text-xl'>Paul Jones</h4>
                            <span className='font-poppins font-light text-[#282938] text-sm'>Design Lead</span>
                        </div>
                    </div>
                    <div className="md:w-[24%] bg-white py-6 mt-6 md:mt-0 rounded-lg">
                        <div className="w-[100px] h-[100px] mx-auto relative group">
                            <img className='w-full h-full' src={meetFour} alt="" />
                            <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-500 bg-team w-full h-full gap-x-2 rounded-full flex items-end justify-center">
                                <a className='text-base text-white mb-6' href="#"><FaFacebookF/></a>
                                <a className='text-base text-white mb-6' href="#"><FaTwitter /></a>
                                <a className='text-base text-white mb-6' href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className='mt-4 font-poppins font-medium text-[#282938] text-xl'>Sara Hardin</h4>
                            <span className='font-poppins font-light text-[#282938] text-sm'>Project Manager</span>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Meet
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import projectOne from '../../assets/Card.png'
import projectTwo from '../../assets/Rectangle 1313.png'
import projectThree from '../../assets/Card (2).png'
import { Link } from 'react-router-dom'

const Porject = () => {
    return (
        <div>
            <section className='py-24'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-between px-4 md:px-0">
                        <div>
                            <h2 className="font-poppins font-bold text-xl md:text-3xl text-[#282938]">View our projects</h2>
                        </div>
                        <div>
                            <a className='text-[#000] text-sm md:text-base font-poppins font-normal hover:underline' href="#">View More <span><FaLongArrowAltRight className='inline-block' /></span></a>
                        </div>
                    </div>
                    <div className="md:flex mt-8 gap-x-8 px-4 md:px-0">
                        <div className="md:w-[68%]">
                            <div className='relative group'>
                            <img className='w-full' src={projectOne} alt="" />
                            <div className="md:w-2/4 bg-project opacity-0 absolute top-0 left-0 group-hover:h-full h-0 group-hover:opacity-100 duration-500">
                                <div className="md:mt-48 mt-8">
                                    <h2 className="font-poppins font-bold text-xl md:text-2xl text-white px-6">Workhub office Webflow Webflow Design</h2>
                                    <p className="mt-[10px] font-poppins text-[#BBBBCB] font-light px-6 w-[90%] text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                    <div className="px-6 mt-4">
                                    <Link className='text-[#ffd600] text-base font-poppins font-normal hover:underline' to="/portfolio">View Project <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="md:w-[32%] mt-12 md:mt-0">
                            <div className="">
                               <div className="relative group">
                               <img className='w-full' src={projectTwo} alt="" />
                               <div className="w-full bg-project absolute top-0 left-0 h-0 group-hover:h-full group-hover:opacity-100 opacity-0 duration-500">
                               <div className="mt-16">
                                    <h2 className="font-poppins font-bold text-2xl text-white px-6">Unisaas Website Design</h2>
                                    <div className="px-6 mt-4">
                                    <Link className='text-[#ffd600] text-base font-poppins font-normal hover:underline' to="/portfolio">View portfolio <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                    </div>
                                </div>
                                </div>
                               </div>
                            </div>
                            <div className="mt-9">
                               <div className="relative group">
                               <img className='w-full' src={projectThree} alt="" />
                               <div className="w-full bg-project absolute top-0 left-0 h-0 group-hover:h-full group-hover:opacity-100 opacity-0 duration-500">
                               <div className="mt-16">
                                    <h2 className="font-poppins font-bold text-2xl text-white px-6">Unisaas Website Design</h2>
                                    <div className="px-6 mt-4">
                                    <Link className='text-[#ffd600] text-base font-poppins font-normal hover:underline' to="/portfolio">View portfolio <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                    </div>
                                </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Porject
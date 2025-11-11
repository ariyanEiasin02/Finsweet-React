import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import projectOne from '../../assets/Card.png'
import projectTwo from '../../assets/Rectangle 1313.png'
import projectThree from '../../assets/Card (2).png'
import { Link } from 'react-router-dom'
import SectionTop from '../Blog/SectionTop'

const Porject = () => {
    return (
        <div>
            <section className='md:py-24 py-16 bg-gradient-to-b from-white to-gray-50'>
                <div className="max-w-container mx-auto">
                    <SectionTop title={"Profilo Website"} link={"/Home/Portfolio"} />

                    {/* Projects Grid */}
                    <div className="md:flex h-100 mt-8 gap-x-8 px-4 md:px-0">
                        {/* Featured Project */}
                        <div className="md:w-[68%]">
                            <div className='relative group overflow-hidden rounded-[8px] shadow-lg hover:shadow-2xl transition-all duration-500'>
                                <img 
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                                    src={projectOne} 
                                    alt="Workhub office project" 
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E53] via-[#1C1E53]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="inline-block px-4 py-1 bg-[#ffd600] text-[#1C1E53] text-xs font-semibold rounded-full mb-4">
                                            FEATURED PROJECT
                                        </div>
                                        <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-3">
                                            Workhub Office Webflow Design
                                        </h2>
                                        <p className="font-poppins text-gray-200 font-normal text-base mb-6 md:w-[90%]">
                                            Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Projects */}
                        <div className="md:w-[32%] flex flex-col gap-8 mt-12 md:mt-0">
                            {/* Project 2 */}
                            <div className="relative group overflow-hidden rounded-[8px] shadow-lg hover:shadow-2xl transition-all duration-500">
                                <img 
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                                    src={projectTwo} 
                                    alt="Unisaas project" 
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E53] via-[#1C1E53]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h2 className="font-poppins font-bold text-xl md:text-2xl text-white mb-4">
                                            Unisaas Website Design
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="relative group overflow-hidden rounded-[8px] shadow-lg hover:shadow-2xl transition-all duration-500">
                                <img 
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                                    src={projectThree} 
                                    alt="Portfolio project" 
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E53] via-[#1C1E53]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h2 className="font-poppins font-bold text-xl md:text-2xl text-white mb-4">
                                            Creative Portfolio Design
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Porject
import React from 'react'
import { FaFacebookSquare,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
const Portfolio = () => {
    return (
        <div>
            <section className='py-36 bg-[#F4F6FC] '>
                <div className="max-w-container mx-auto">
                    <div className="text-center px-4 md:px-0">
                        <span className='font-poppins font-medium text-[#282938] text-base'>What we created</span>
                        <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-3xl md:text-4xl'>Our Work Portfolio</h2>
                        <p className='mt-4 font-poppins font-normal text-[#282938] text-sm md:text-base md:w-[70%] mx-auto'>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                        <div className="flex justify-center mt-6">
                            <ul className='flex gap-x-8'>
                                <li>
                                    <a className='font-poppins font-normal text-[#282938] hover:text-[#efa242] text-xl' href="#"><FaFacebookSquare /></a>
                                </li>
                                <li>
                                    <a className='font-poppins font-normal text-[#282938] hover:text-[#efa242] text-xl' href="#"><FaTwitter /></a>
                                </li>
                                <li>
                                    <a className='font-poppins font-normal text-[#282938] hover:text-[#efa242] text-xl' href="#"><FaInstagram /></a>
                                </li>
                                <li>
                                    <a className='font-poppins font-normal text-[#282938] hover:text-[#efa242] text-xl' href="#"><FaLinkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
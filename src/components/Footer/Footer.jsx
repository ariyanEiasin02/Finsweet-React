import React from 'react'
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <section className='md:pt-24 bg-[#1c1e53]'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex py-12 md:py-0 justify-between gap-x-12 px-4 md:px-0">
                        <div className="md:w-2/4">
                            <img src={logo} alt="" />
                            <p className='font-poppins text-[#d2d2dd] font-light text-base md:w-[70%] mt-4'>We are always open to discuss your project and improve your online presence.</p>
                            <div className="md:flex rounded-t-lg bg-[#fcd980] py-4 px-6 md:mt-20 mt-8">
                                <div className="">
                                    <h6 className="font-poppins text-black text-lg font-normal">Email me at</h6>
                                    <p className='font-poppins text-[#000] font-light text-sm mt-2'>ariyaneiasin56@gmail.com</p>
                                </div>
                                <div className="md:ml-12 mt-4 md:mt-0">
                                    <h6 className="font-poppins text-black text-lg font-normal">Call us</h6>
                                    <p className='font-poppins text-[#000] font-light text-sm mt-2'>01704037578</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/4 mt-6 md:mt-0">
                            <div className="">
                                <h2 className='font-poppins font-medium text-4xl text-white'>Lets Talk!</h2>
                                <p className='font-poppins text-[#d2d2dd] font-light text-base md:w-[70%] mt-4'>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                                <div className="mt-6">
                                    <a href="#"><FaFacebook className='inline-block text-white text-2xl' /></a>
                                    <a className='pl-6' href="#"><FaTwitter className='inline-block text-white text-2xl' /></a>
                                    <a className='pl-6' href="#"><FaInstagram className='inline-block text-white text-2xl' /></a>
                                    <a className='pl-6' href="#"><FaLinkedin className='inline-block text-white text-2xl' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='py-6 bg-white'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between">
                        <div className="px-4 md:px-0">
                            <p className='font-poppins font-medium text-navbar text-base'>Copyright 2022, Finsweet.com</p>
                        </div>
                        <div className="px-4 md:px-0 mt-2 md:mt-0">
                            <ul className='flex md:gap-x-8 gap-x-4'>
                                <li>
                                    <a className='text-sm md:text-base font-poppins font-medium text-navbar hover:text-navbarhover' href="#">Home</a>
                                </li>
                                <li>
                                    <a  className='text-sm md:text-base font-poppins font-medium text-navbar hover:text-navbarhover' href="#">About</a>
                                </li>
                                <li>
                                    <a  className='text-sm md:text-base font-poppins font-medium text-navbar hover:text-navbarhover' href="#">Features</a>
                                </li>
                                <li>
                                    <a  className='text-sm md:text-base font-poppins font-medium text-navbar hover:text-navbarhover' href="#">Pricing</a>
                                </li>
                                <li>
                                    <a  className='text-sm md:text-base font-poppins font-medium text-navbar hover:text-navbarhover' href="#">FAQ</a>
                                </li>
                                <li>
                                    <a  className='text-sm md:text-base font-poppins font-medium text-navbar hover:text-navbarhover' href="#">Blog</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
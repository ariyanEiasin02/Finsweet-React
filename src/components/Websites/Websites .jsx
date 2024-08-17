import React from 'react'
import website from '../../assets/website.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Websites = () => {
    return (
        <div>
            <section>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between">
                        <div className="md:w-2/4">
                        <div className="relative h-[450px] md:h-[600px]">
                            <img className='w-full h-full' src={website} alt="" />
                            <div style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" }} className="w-full h-full absolute top-0 left-0">
                                <div className="px-4 md:px-0">
                                    <h2 className="pt-[70px] font-poppins font-bold text-white text-3xl md:text-5xl md:pl-[50px]">Building stellar <br /> websites for <br />early startups</h2>
                                    <p className="mt-[20px] font-poppins text-white font-light text-base md:pl-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua ut enim.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="md:w-2/4">
                            <div className="bg-[#1C1E53] h-[600px] py-12 px-4 md:px-0">
                                <h3 className="md:pt-[70px] font-poppins font-bold text-white text-3xl md:text-5xl md:pl-[50px]">Send inquiry</h3>
                                <p className="mt-[20px] font-poppins text-white font-light text-base md:pl-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <input className="outline-none font-poppins text-white border rounded-xl bg-transparent font-light text-base md:ml-[50px] p-[12px] md:w-[80%] w-full mt-[14px]" type="text" placeholder="Your Name"/>
                                <input className="outline-none font-poppins text-white border rounded-xl bg-transparent font-light text-base md:ml-[50px] p-[12px] md:w-[80%] w-full mt-[14px]" type="email" placeholder="Email"/>
                                <input className="outline-none font-poppins text-white border rounded-xl bg-transparent font-light text-base md:ml-[50px] p-[12px] md:w-[80%] w-full mt-[14px]" type="email" placeholder="Paste your Figma design URL"/>
                                   
                                <div className="mt-[50px] mx-auto text-center">
                                    <a className='bg-[#FCD980] py-4 px-24 rounded-full text-black text-base font-poppins hover:bg-transparent hover:text-white duration-500' href="#">Send an Inquiry</a>
                                </div>
                                    <div className="mt-12 text-center">
                                    <a  className='ml-6 px-10 rounded-full text-base font-poppins bg-transparent text-white duration-500' href="#">Get in touch with us <span><FaLongArrowAltRight className='inline-block' /></span></a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
                </div>
                )
}

                export default Websites 
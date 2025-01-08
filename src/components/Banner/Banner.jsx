import React from 'react'
import banner from '../../assets/banner.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div>
            <section className='bg-navbar md:py-48 py-8' id="banner">
                <div className="max-w-container mx-auto">
                    <div className="flex px-4 md:px-0 flex-col-reverse md:flex-row items-center">
                        <div className="md:w-2/4 py-12 md:py-0">
                            <h1 className='md:w-[65%] leading-[40px] md:leading-[50px] font-poppins text-white font-bold text-2xl md:text-4xl '>Building stellar websites for early startups</h1>
                            <p className='md:mt-[20px] mt-6 font-poppins text-white font-normal text-base md:w-[80%] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className="md:flex mt-[50px]">
                                <div className="">
                                    <a className='bg-[#FCD980] py-4 px-10 rounded-full text-black text-base font-poppins font-medium hover:bg-transparent hover:text-white border-[#FCD980]  border-2 duration-700' href="#">View our work</a>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <a className='md:ml-6 hover:bg-[#FCD980] py-4 px-10 rounded-full border-[#FCD980]  border-2 hover:text-black text-base font-medium font-poppins bg-transparent text-white duration-500' href="#">View Pricing <span><FaLongArrowAltRight className='inline-block' /></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/4 my-6 md:my-0">
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
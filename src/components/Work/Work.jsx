import React from 'react'
import pointerOne from '../../assets/pointer 1.png'
import pointerTwo from '../../assets/pointer 2.png'
import pointerThree from '../../assets/pointer 3.png'
import pointerFour from '../../assets/pointer 4.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Work = () => {
    return (
        <div>
            <section className='bg-[#F4F6FC] py-24'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between px-4 md:px-0">
                        <div className="md:w-2/5">
                            <h2 className="font-poppins font-bold text-3xl text-[#282938]">How we work</h2>
                            <p className="mt-[10px] font-poppins text-[#282938] font-light w-[80%] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="mt-4">
                                <a className='text-[#2405F2] text-base font-poppins font-normal hover:underline' href="#">Get in touch with us <span><FaLongArrowAltRight className='inline-block' /></span></a>
                            </div>
                        </div>
                        <div className="md:w-3/5 mt-8 md:mt-0">
                            <div className="flex flex-wrap gap-y-8 justify-between">
                                <div className="w-2/4">
                                    <img src={pointerOne} alt="" />
                                    <h3 className="font-poppins font-semibold mt-2 md:text-2xl text-xl text-[#282938]">Strategy</h3>
                                    <p className="mt-[10px] font-poppins text-[#282938] font-light w-[90%] text-sm md:text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="w-2/4">
                                    <img src={pointerTwo} alt="" />
                                    <h3 className="font-poppins font-semibold mt-2 text-xl md:text-2xl text-[#282938]">Wireframing</h3>
                                    <p className="mt-[10px] font-poppins text-[#282938] font-light w-[90%] text-sm md:text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="w-2/4">
                                    <img src={pointerThree} alt="" />
                                    <h3 className="font-poppins font-semibold mt-2 text-xl md:text-2xl text-[#282938]">Design</h3>
                                    <p className="mt-[10px] font-poppins text-[#282938] font-light w-[90%] text-sm md:text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="w-2/4">
                                    <img src={pointerFour} alt="" />
                                    <h3 className="font-poppins font-semibold mt-2 text-xl md:text-2xl text-[#282938]">Development</h3>
                                    <p className="mt-[10px] font-poppins text-[#282938] font-light w-[90%] text-sm md:text-base">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work
import React from 'react'
import { HiUserGroup } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { TbMessageCircleQuestion } from "react-icons/tb"
import { MdTimer,MdEditDocument } from "react-icons/md";
const Features = () => {
  return (
    <div>
        <section className='py-24 bg-[#F4F6FC]'>
            <div className="max-w-container mx-auto">
                <div className="text-center">
                    <span className='font-poppins text-base'>Features</span>
                    <h2 className='mt-2 font-poppins text-xl md:text-3xl font-bold md:w-[30%] w-[70%] mx-auto'>Design that solves problems, one product at a time</h2>
                </div>
                <div className="flex flex-wrap gap-y-6 px-4 md:px-0 justify-between mt-12">
                    <div className="md:w-[32%] bg-white rounded-xl py-8 px-6">
                        <span><HiUserGroup className='text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-2xl text-black font-meduim mt-4'>Uses Client First</h4>
                        <p className='mt-2 font-poppins text-base text-[#282938] font-light'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                    <div className="md:w-[32%] bg-white rounded-xl py-8 px-6">
                        <span><FaCheckCircle className='text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-2xl text-black font-meduim mt-4'>Two Free Revision Round</h4>
                        <p className='mt-2 font-poppins text-base text-[#282938] font-light'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                    <div className="md:w-[32%] bg-white rounded-xl py-8 px-6">
                        <span><FaPenRuler className='text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-2xl text-black font-meduim mt-4'>Template Customization</h4>
                        <p className='mt-2 font-poppins text-base text-[#282938] font-light'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                    <div className="md:w-[32%] bg-white rounded-xl py-8 px-6">
                        <span><TbMessageCircleQuestion className='text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-2xl text-black font-meduim mt-4'>24/7 Support</h4>
                        <p className='mt-2 font-poppins text-base text-[#282938] font-light'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                    <div className="md:w-[32%] bg-white rounded-xl py-8 px-6">
                        <span><MdTimer className='text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-2xl text-black font-meduim mt-4'>Quick Delivery</h4>
                        <p className='mt-2 font-poppins text-base text-[#282938] font-light'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                    <div className="md:w-[32%] bg-white rounded-xl py-8 px-6">
                        <span><MdEditDocument  className='text-4xl text-[#2405F2]' /></span>
                        <h4 className='font-poppins text-2xl text-black font-meduim mt-4'>Hands-on approach</h4>
                        <p className='mt-2 font-poppins text-base text-[#282938] font-light'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features
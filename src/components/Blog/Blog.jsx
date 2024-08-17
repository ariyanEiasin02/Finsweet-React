import React from 'react'
import blog from '../../assets/blog.png'
import blogOne from '../../assets/blog01.png'
import blogTwo from '../../assets/blog02.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Blog = () => {
    return (
        <div>
            <section className='py-24'>
                <div className="max-w-container mx-auto">
                    <div className="px-4 md:px-0">
                        <h2 className='font-poppins font-medium text-3xl text-black'>Our blog</h2>
                    </div>
                    <div className="md:flex justify-between px-4 md:px-0">
                        <div className="md:w-[32%] border border-[#D2D2D2] mt-8 rounded-lg">
                            <img className='' src={blog} alt="" />
                            <div className="px-4 py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-2">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <a className="font-poppins text-black text-lg font-medium mt-4 hover:text-[#E83E8C]" href="#">Read More <span><FaLongArrowAltRight className='inline-block' /></span></a>
                            </div>
                        </div>
                        <div className="md:w-[32%] border border-[#D2D2D2] mt-8 rounded-lg">
                            <img className='' src={blogOne} alt="" />
                            <div className="px-4 py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-2">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <a className="font-poppins text-black text-lg font-medium mt-4 hover:text-[#E83E8C]" href="#">Read More <span><FaLongArrowAltRight className='inline-block' /></span></a>
                            </div>
                        </div>
                        <div className="md:w-[32%] border border-[#D2D2D2] mt-8 rounded-lg">
                            <img className='' src={blogTwo} alt="" />
                            <div className="px-4 py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-2">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <a className="font-poppins text-black text-lg font-medium mt-4 hover:text-[#E83E8C]" href="#">Read More <span><FaLongArrowAltRight className='inline-block' /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
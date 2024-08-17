import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import blog from '../../assets/blog03.png'
import blogOne from '../../assets/blog01.png'
import blogTwo from '../../assets/blog02.png'
import blogThree from '../../assets/blog06.png'
import blogFour from '../../assets/blog04.png'
import blogFive from '../../assets/blog05.png'
import { Link } from 'react-router-dom'
const OurBlog = () => {
    return (
        <div>
            <section className='pb-12'>
                <div className="max-w-container mx-auto">
                    <div className="px-4 md:px-0">
                        <h2 className='text-center font-poppins font-medium text-3xl text-black'>Our blog</h2>
                    </div>
                    <div className="md:flex flex-wrap mt-6 justify-between gap-x-8 px-4 md:px-0">
                        <div className="md:w-[30%] mt-8 rounded-lg">
                            <img className='' src={blog} alt="amiiii" />
                            <div className="py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl md:text-3xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-4">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <div className="mt-6">
                                    <Link className="font-poppins text-black text-lg font-medium hover:text-[#E83E8C]" to="/blog/ReadBlog">Read More <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] mt-8 rounded-lg">
                            <img className='' src={blogTwo} alt="amiiii" />
                            <div className="py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl md:text-3xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-4">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <div className="mt-6">
                                    <Link className="font-poppins text-black text-lg font-medium mt-8 hover:text-[#E83E8C]" to="/blog/ReadBlog">Read More <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] mt-8 rounded-lg">
                            <img className='' src={blogThree} alt="amiiii" />
                            <div className="py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl md:text-3xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-4">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <div className="mt-6">
                                    <Link className="font-poppins text-black text-lg font-medium mt-8 hover:text-[#E83E8C]" to="/blog/ReadBlog">Read More <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] mt-8 rounded-lg">
                            <img className='' src={blogFour} alt="amiiii" />
                            <div className="py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl md:text-3xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-4">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <div className="mt-6">
                                    <Link className="font-poppins text-black text-lg font-medium mt-8 hover:text-[#E83E8C]" to="/blog/ReadBlog">Read More <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] mt-8 rounded-lg">
                            <img className='' src={blogFive} alt="amiiii" />
                            <div className="py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl md:text-3xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-4">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <div className="mt-6">
                                    <Link className="font-poppins text-black text-lg font-medium mt-8 hover:text-[#E83E8C]" to="/blog/ReadBlog">Read More <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[30%] mt-8 rounded-lg">
                            <img className='' src={blogOne} alt="amiiii" />
                            <div className="py-6">
                                <span className="font-poppins text-black text-sm mt-2">19 Jan 2022</span>
                                <h3 className="font-poppins font-medium text-black text-2xl md:text-3xl mt-2">How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                <p className="font-poppins text-black text-base font-light mt-4">See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                <div className="mt-6">
                                    <Link className="font-poppins text-black text-lg font-medium mt-8 hover:text-[#E83E8C]" to="/blog/ReadBlog">Read More <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurBlog
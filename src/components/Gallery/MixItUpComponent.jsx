// src/components/MixItUpComponent.jsx
import React, { useEffect, useRef } from 'react';
import portfoiloOne from '../../assets/p1.png'
import portfoiloTwo from '../../assets/p2.png'
import portfoiloThree from '../../assets/p3.png'
import portfoiloFour from '../../assets/p4.png'
import portfoiloFive from '../../assets/p5.png'
import portfoiloSix from '../../assets/p6.png'
import mixitup from 'mixitup';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MixItUpComponent = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        mixitup(containerRef.current);
    }, []);

    return (
        <>
            <div className="max-w-container mx-auto py-16">
                <div className="controls flex justify-center gap-x-4 md:gap-x-8 mb-4">
                    <button className="font-poppins text-sm md:text-base text-[#282938] font-medium" data-filter="all">All</button>
                    <button className="font-poppins text-sm md:text-base text-[#282938] font-medium" data-filter=".category-a">UI Design</button>
                    <button className="font-poppins text-sm md:text-base text-[#282938] font-medium" data-filter=".category-b"> Webflow Design</button>
                    <button className="font-poppins text-sm md:text-base text-[#282938] font-medium" data-filter=".category-c">Figma Design</button>
                </div>

                <div className="">
                    <div className="md:flex px-4 md:px-0 flex-wrap justify-between gap-x-8" ref={containerRef}>
                        <div className="md:w-[48%] mt-12 mix category-a">
                            <div className="">
                                <img src={portfoiloOne} alt="" />
                            </div>
                            <div className="">
                                <h3 className='font-poppins text-[#282938] font-bold text-2xl md:text-3xl py-2'>Template 1</h3>
                                <p className='mt-2 font-poppins text-[#282938] font-light text-sm md:text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                <div className="mt-2">
                                    <Link className='rounded-full text-base font-poppins text-black duration-500' to="/workPage/readCase">View Portfolio<span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[48%] mt-12  mix category-b">
                            <div className="">
                                <img src={portfoiloTwo} alt="" />
                            </div>
                            <div className="">
                                <h3 className='font-poppins text-[#282938] font-bold text-2xl md:text-3xl py-2'>Template 2</h3>
                                <p className='mt-2 font-poppins text-[#282938] font-light text-sm md:text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                <div className="mt-2">
                                    <Link className='rounded-full text-base font-poppins text-black duration-500' to="/workPage/readCase">View Portfolio <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[48%] mt-12  mix category-c">
                            <div className="">
                                <img src={portfoiloThree} alt="" />
                            </div>
                            <div className="">
                                <h3 className='font-poppins text-[#282938] font-bold text-2xl md:text-3xl py-2'>Template 3</h3>
                                <p className='mt-2 font-poppins text-[#282938] font-light text-sm md:text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                <div className="mt-2">
                                    <Link className='rounded-full text-base font-poppins text-black duration-500' to="/workPage/readCase">Read case study <span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[48%] mt-12  mix category-a">
                            <div className="">
                                <img src={portfoiloFour} alt="" />
                            </div>
                            <div className="">
                                <h3 className='font-poppins text-[#282938] font-bold text-2xl md:text-3xl py-2'>Template 4</h3>
                                <p className='mt-2 font-poppins text-[#282938] font-light text-sm md:text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                <div className="mt-2">
                                    <Link className='rounded-full text-base font-poppins text-black duration-500' to="/workPage/readCase">Read case study<span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[48%] mt-12  mix category-b">
                            <div className="">
                                <img src={portfoiloFive} alt="" />
                            </div>
                            <div className="">
                                <h3 className='font-poppins text-[#282938] font-bold text-2xl md:text-3xl py-2'>Template 5</h3>
                                <p className='mt-2 font-poppins text-[#282938] font-light text-sm md:text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                <div className="mt-2">
                                <Link className='rounded-full text-base font-poppins text-black duration-500' to="/workPage/readCase">Read case study<span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[48%] mt-12 mix category-c">
                            <div className="">
                                <img src={portfoiloSix} alt="" />
                            </div>
                            <div className="">
                                <h3 className='font-poppins text-[#282938] font-bold text-2xl md:text-3xl py-2'>Template 6</h3>
                                <p className='mt-2 font-poppins text-[#282938] font-light text-sm md:text-base'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                                <div className="mt-2">
                                <Link className='rounded-full text-base font-poppins text-black duration-500' to="/workPage/readCase">Read case study<span><FaLongArrowAltRight className='inline-block' /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MixItUpComponent;

import React from 'react'
import featuresOne from '../../assets/featur.png'
import featuresTwo from '../../assets/featur01.png'
import featuresThree from '../../assets/featur02.png'
import featuresFour from '../../assets/featur04.png'
const FeaturesAllFeatures = () => {
    return (
        <div>
            <section className=''>
                <div className="py-6 md:py-12">
                    <div className="max-w-container mx-auto">
                        <div className="px-4 md:px-0 flex flex-col-reverse md:flex-row justify-between gap-x-8 items-center py-8">
                            <div className="md:w-2/4 mt-6 md:mt-0">
                                <span className='font-poppins font-medium text-[#282938] text-base'>Use Client-first</span>
                                <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[85%]'>Top agencies and freelancers around the world use Client-first </h2>
                                <p className='mt-4 font-poppins font-normal text-[#282938] text-base md:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="md:w-2/4">
                                <img className='rounded-lg' src={featuresOne} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f6fc] py-6 md:py-12">
                    <div className="max-w-container mx-auto">
                    <div className="px-4 md:px-0 md:flex justify-between gap-x-8 items-center py-8">
                    <div className="md:w-2/4">
                        <img className='rounded-lg' src={featuresTwo} alt="" />
                    </div>
                    <div className="md:w-2/4 mt-6 md:mt-0">
                        <span className='font-poppins font-medium text-[#282938] text-base'>Free Revision Rounds</span>
                        <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[85%]'>Get free Revisions and one week of free maintenance</h2>
                        <p className='mt-4 font-poppins font-normal text-[#282938] text-base md:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                    </div>
                </div>
                <div className="py-6 md:py-12">
                    <div className="max-w-container mx-auto">
                        <div className="px-4 md:px-0 flex flex-col-reverse md:flex-row justify-between gap-x-8 items-center py-8">
                            <div className="md:w-2/4 mt-6 md:mt-0">
                                <span className='font-poppins font-medium text-[#282938] text-base'>24/7 Support</span>
                                <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[85%]'>Working with us, you will be getting 24/7 priority support </h2>
                                <p className='mt-4 font-poppins font-normal text-[#282938] text-base md:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="md:w-2/4">
                                <img className='rounded-lg' src={featuresThree} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fffbf2] py-6 md:py-12">
                    <div className="max-w-container mx-auto">
                    <div className="px-4 md:px-0 md:flex justify-between gap-x-8 items-center py-8">
                    <div className="md:w-2/4">
                        <img className='rounded-lg' src={featuresFour} alt="" />
                    </div>
                    <div className="md:w-2/4 mt-6 md:mt-0">
                        <span className='font-poppins font-medium text-[#282938] text-base'>Quick Delivery</span>
                        <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[85%]'>Guranteed 1 week delivery for standard five pager website</h2>
                        <p className='mt-4 font-poppins font-normal text-[#282938] text-base md:w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesAllFeatures
import React from 'react'
import Feature from '../../assets/Feature.png'

const FeaturesBanner = () => {
  return (
    <div>
        <section className='bg-navbar md:py-48 py-8' id="banner">
                <div className="max-w-container mx-auto">
                    <div className="flex px-4 md:px-0 flex-col-reverse md:flex-row items-center">
                        <div className="md:w-2/4 py-12 md:py-0">
                            <h2 className='md:w-[65%] leading-[40px] md:leading-[50px] font-poppins text-white font-bold text-3xl md:text-4xl '>All the features you need</h2>
                            <p className='md:mt-[30px] mt-6 font-poppins text-white font-light text-base md:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <div className="md:flex mt-[50px]">
                                <div className="">
                                    <a className='bg-[#FCD980] py-4 px-10 rounded-full text-black text-base font-poppins hover:bg-transparent hover:text-white duration-500' href="#">View Pricing</a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/4 my-6 md:my-0">
                            <img src={Feature} alt="" />
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default FeaturesBanner
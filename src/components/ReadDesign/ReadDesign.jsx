import React from 'react'
import portfolioOne from '../../assets/cover.png'
const ReadDesign = () => {
  return (
    <div>
        <section className='pt-24'>
            <div className="max-w-container mx-auto">
                <div className="px-20">
                    <span className='font-poppins font-medium text-[#282938] text-base'>Web design and development</span>
                    <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-3xl md:text-4xl w-[50%]'>Finsweet Design case studies</h2>
                    <p className='mt-4 font-poppins font-light text-[#282938] text-sm md:text-base w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    <img className='mt-8' src={portfolioOne} alt="" />
                    <div className="flex justify-between border-b py-4 mt-4">
                        <div className="">
                            <span className='font-poppins font-light text-[#282938] text-base'>Client</span>
                            <h4 className='font-poppins font-semibold text-[#282938] text-xl'>facebook.com</h4>
                        </div>
                        <div className="">
                            <span className='font-poppins font-light text-[#282938] text-base'>Service</span>
                            <h4 className='font-poppins font-semibold text-[#282938] text-xl'>Product Design</h4>
                        </div>
                        <div className="">
                            <span className='font-poppins font-light text-[#282938] text-base'>Deliverable</span>
                            <h4 className='font-poppins font-semibold text-[#282938] text-xl'>UI Screens, UX Flow & Prototype</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ReadDesign
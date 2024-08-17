import React from 'react'
import testmonial from '../../assets/testmonial.png'

const Clients = () => {
    return (
        <div>
            
            <section className='bg-[#EFF7F8] py-24'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between px-4 md:0">
                        <div className="md:w-2/5">
                            <h2 className="font-poppins font-medium text-4xl text-black">What our clients <br />say about us</h2>
                            <p className="font-poppins font-light text-base mt-2">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed.</p>
                        </div>
                        <div className="md:w-3/5 mt-6 md:mt-0">
                            <h3 className='font-poppins font-medium text-2xl text-black'><q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q></h3>
                            <div class="flex mt-6">
                                <div class="">
                                    <img className='w-[50px] h-[50px] rounded-full' src={testmonial} alt="testmonial" />
                                </div>
                                <div class="ml-2">
                                    <h6 className='font-poppins text-black text-base font-medium'>Jenny Wilson</h6>
                                    <p className='font-poppins text-sm font-light'>Vice President</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients
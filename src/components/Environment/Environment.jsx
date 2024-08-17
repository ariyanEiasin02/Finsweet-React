import React from 'react'
import blogbanner from '../../assets/blogbanner.png'
const Environment = () => {
    return (
        <div>
            <section className='py-12 md:py-24'>
                <div className="max-w-container mx-auto">
                    <div className="md:text-center px-4 md:px-0">
                        <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-4xl md:w-[60%] md:mx-auto mb-4'>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <span className='font-poppins font-light text-[#282938] text-sm md:text-base'>Andrew Jonson
                        Posted on 27th January 2021</span>
                    </div>
                    <div className="py-6">
                        <img src={blogbanner} alt="" />
                    </div>
                    <div className="md:text-center mt-4 px-4 md:px-0">
                        <p className='font-poppins font-light text-[#282938] text-base md:w-[60%] mx-auto'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                        <h6 className='mt-4 font-poppins font-light text-[#2405F2] text-base'>Read more</h6>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Environment
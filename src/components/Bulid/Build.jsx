import React from 'react'
import { Link } from 'react-router-dom'

const Build = () => {
    return (
        <div>
            <section className='md:pt-12 pt-4 md:pb-32 pb-16'>
                <div className="max-w-container mx-auto">
                    <div className="md:text-center px-4 md:px-0">
                        <h2 className='mt-2 font-poppins font-semibold text-[#282938] text-2xl md:text-4xl md:w-[60%] mx-auto'>Let's build something great together</h2>
                        <p className='mt-6 font-poppins text-[#282938] font-light text-base md:w-[50%] mx-auto'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                        <div className="mt-12">
                            <Link className='bg-[#FCD980] py-4 px-10 rounded-full text-black text-base font-poppins' to="Home/Contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Build
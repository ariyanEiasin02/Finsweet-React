import React from 'react'
import blogbanner from '../../assets/blogbanner.png'
const ReadBlogComponent = () => {
  return (
    <div>
        <section className='pt-24'>
                <div className="max-w-container mx-auto">
                    <div className="md:text-center px-4 md:px-0">
                        <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-4xl md:w-[60%] mx-auto mb-4'>A UX Case Study on Creating a Studious Environment for Students</h2>
                        <span className='font-poppins font-light text-[#282938] text-sm md:text-base'>Andrew Jonson
                        Posted on 27th January 2021</span>
                    </div>
                    <div className="my-6">
                        <img src={blogbanner} alt="" />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ReadBlogComponent
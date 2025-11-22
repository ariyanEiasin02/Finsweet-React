import React from 'react'
import { useParams } from 'react-router-dom'
import blogData from '../../data/blogData.json'
import readBlog from '../../assets/readBlog.jpg'

const BlogLorem = () => {
  const { slug } = useParams()
  const blog = blogData.find(item => item.slug === slug)

  if (!blog) {
    return (
      <div className="max-w-container mx-auto px-4 py-16 text-center">
        <h2 className="font-poppins font-semibold text-2xl text-[#282938]">Blog not found</h2>
      </div>
    )
  }

  const getImageSrc = (imagePath) => {
    try {
      const imageName = imagePath.split('/').pop()
      return new URL(`../../assets/${imageName}`, import.meta.url).href
    } catch (error) {
      return imagePath
    }
  }

  return (
    <div>
      <section className='pb-16'>
        <div className="max-w-container mx-auto">
          <div className="md:px-36 px-4 mt-2">
            <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[80%] mb-4'>{blog.title}
            </h2>
            <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-2">{blog.excerpt}</p>
            <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className='text-[#2405F2] font-medium'>Excepteur sint occaecat</span> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="md:px-36 px-4 mt-6">
            <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[80%] mb-4'>Key Insights and Details
            </h2>
            <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<span className='text-[#2405F2] font-medium'>cupidatat non</span> proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <li className='ml-4 mt-4 font-poppins font-light text-[#282938] text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className='text-[#2405F2] font-medium'>Excepteur sint occaecat</span> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="md:px-36 px-4 mt-6">
            <img className="w-full rounded-lg" src={blog.image ? getImageSrc(blog.image) : readBlog} alt={blog.title} />
          </div>
          <div className="md:px-36 px-4 mt-8">
            <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-3xl md:w-[80%] mb-4'>Conclusion and Takeaways
            </h2>
            <p className="font-poppins text-[#282938] text-sm md:text-base font-light mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <span className='text-[#2405F2] font-medium'>exercitation ullamco </span>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogLorem
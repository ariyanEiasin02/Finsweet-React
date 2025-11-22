import React from 'react'
import { useParams } from 'react-router-dom'
import blogData from '../../data/blogData.json'
import blogbanner from '../../assets/blogbanner.png'

const ReadBlogComponent = () => {
  const { slug } = useParams()
  const blog = blogData.find(item => item.slug === slug)

  if (!blog) {
    return null
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
        <section className='pt-24'>
                <div className="max-w-container mx-auto">
                    <div className="md:text-center px-4 md:px-0">
                        <h2 className='font-poppins font-semibold text-[#282938] text-2xl md:text-4xl md:w-[60%] mx-auto mb-4'>{blog.title}</h2>
                        <span className='font-poppins font-light text-[#282938] text-sm md:text-base'>{blog.author} • Posted on {blog.date}</span>
                        <div className="mt-3">
                          <span className='inline-block px-4 py-1 bg-[#FCD980] rounded-full font-poppins text-sm font-medium text-[#282938]'>{blog.category}</span>
                        </div>
                    </div>
                    <div className="my-6">
                        <img className="w-full rounded-lg" src={blog.image ? getImageSrc(blog.image) : blogbanner} alt={blog.title} />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ReadBlogComponent
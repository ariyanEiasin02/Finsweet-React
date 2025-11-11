import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

const BlogCard = ({ blog, showCategory = true, showAuthor = false }) => {
    // Handle dynamic image imports
    const getImageSrc = (imagePath) => {
        try {
            // Extract the image filename from the path
            const imageName = imagePath.split('/').pop()
            return new URL(`../../assets/${imageName}`, import.meta.url).href
        } catch (error) {
            // Fallback to a placeholder if image not found
            return imagePath
        }
    }

    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-xl transition-all duration-300">
            {/* Image Container */}
            <div className="overflow-hidden">
                <img 
                    className='w-full h-[220px] md:h-[240px] object-cover group-hover:scale-110 transition-transform duration-500' 
                    src={getImageSrc(blog.image)} 
                    alt={blog.title}
                />
            </div>

            {/* Content Container */}
            <div className="px-5 pt-6 pb-8 space-y-3">
                {/* Title */}
                <h3 className="font-poppins font-medium text-black text-[16px] md:text-[18px] leading-snug line-clamp-2  transition-colors duration-300">
                    {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="font-poppins text-gray-500 text-sm md:text-sm leading-relaxed line-clamp-3">
                    {blog.excerpt}
                </p>

                {/* Footer */}
                <div className="pt-2">
                    {/* {showAuthor && (
                        <span className="font-poppins text-sm text-gray-600">
                            By <span className="font-medium text-black">{blog.author}</span>
                        </span>
                    )} */}
                    
                    <Link 
                        className="inline-flex items-center gap-2 font-poppins text-black text-sm md:text-base font-semibold hover:text-pink-600 transition-colors duration-300 ml-auto" 
                        to={`/Home/Blog/${blog.slug}`}
                    >
                        Read More 
                        <FaLongArrowAltRight className='text-base transition-transform duration-300' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard

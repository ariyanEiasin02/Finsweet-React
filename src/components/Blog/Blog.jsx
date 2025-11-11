import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import blogData from '../../data/blogData.json'

const Blog = ({ limit = 3, showCategory = true, showAuthor = false }) => {
    const displayBlogs = limit ? blogData.slice(0, limit) : blogData

    return (
        <div>
            <section className='md:py-20 py-12 bg-gray-50'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <div className="">
                            <h2 className='font-poppins font-semibold text-2xl md:text-4xl text-black'>Our blog</h2>
                        <p className='font-poppins text-gray-600 text-base mt-2'>
                            Discover insights, tips, and stories from our team
                        </p>
                        </div>
                         {limit && blogData.length > limit && (
                        <div className="">
                            <a 
                                href="/Home/Blog" 
                                className="px-8 py-3 bg-[#1C1E53] text-white font-poppins font-medium rounded-full hover:bg-[#2a2d6b] hover:shadow-lg transition-all duration-300"
                            >
                                View All Posts
                            </a>
                        </div>
                    )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                        {displayBlogs.map((blog) => (
                            <BlogCard 
                                key={blog.id} 
                                blog={blog} 
                                showCategory={showCategory}
                                showAuthor={showAuthor}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog

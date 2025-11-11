import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import blogData from '../../data/blogData.json'

const OurBlog = ({ limit = null, showCategory = true, showAuthor = true }) => {
    const displayBlogs = limit ? blogData.slice(0, limit) : blogData

    return (
        <div>
            <section className='py-16 md:py-24'>
                <div className="max-w-container mx-auto">
                    <div className="px-4 md:px-0 mb-16">
                        <h2 className='text-center font-poppins font-semibold text-3xl md:text-5xl text-black mb-4'>Our Blog</h2>
                        <p className='text-center font-poppins text-gray-500 text-lg max-w-2xl mx-auto'>
                            Stay updated with our latest insights, tutorials, and industry news
                        </p>
                    </div>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-0">
                        {displayBlogs.map((blog) => (
                            <BlogCard 
                                key={blog.id} 
                                blog={blog} 
                                showCategory={showCategory}
                                showAuthor={showAuthor}
                            />
                        ))}
                    </div>

                    {displayBlogs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 font-poppins text-lg">No blog posts available at the moment.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default OurBlog
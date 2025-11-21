import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import blogData from '../../data/blogData.json'
import SectionTop from './SectionTop'

const Blog = ({ limit = 4, showCategory = true, showAuthor = false }) => {
    const displayBlogs = limit ? blogData.slice(0, limit) : blogData

    return (
        <div>
            <section className='md:py-20 py-12 bg-gray-50'>
                <div className="max-w-container mx-auto">
                    <SectionTop title={"Our Blog"} description={"Discover insights, tips, and stories from our team to elevate your business."} link={"/Home/Blog"} />
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
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

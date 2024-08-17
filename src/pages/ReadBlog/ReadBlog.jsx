import React from 'react'
import ReadBlogComponent from '../../components/ReadBlogComponent/ReadBlogComponent'
import BlogLorem from '../../components/BlogLorem/BlogLorem'

const ReadBlog = () => {
  return (
    <div className='pt-24'>
        <ReadBlogComponent />
        <BlogLorem />
    </div>
  )
}

export default ReadBlog
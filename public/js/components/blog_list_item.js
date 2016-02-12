import React from 'react';

const BlogListItem = (props) => {
  const blog = props.blog;
  return (
    <li className="blog_item">
      <div className="blog_title">{blog.title}</div>
      <div>{blog.time}</div>
      <div>{blog.text}</div>
    </li>
  )
}

export default BlogListItem;
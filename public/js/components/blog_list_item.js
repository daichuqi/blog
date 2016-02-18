import React from 'react';

const BlogListItem = (props) => {
  const blog = props.blog;
  const date = blog.date.slice(3,15)
  const section = {__html:blog.text.split("\n").join('<br />')}
  return (
    <li className="blog_item">
      <div className="blog_title">{blog.title}
        <span className="blog_date">{date}</span>
      </div>
      <div dangerouslySetInnerHTML={ section } className="blog_section" />
    </li>
  )
}

export default BlogListItem;
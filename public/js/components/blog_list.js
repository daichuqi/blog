import React from 'react';

const BlogList = (props) => {
  const blogItems = props.blogs.map((blog)=>{
    return (
      <div key={blog._id}> {blog.title} </div>
    )
  });
  return(
    <ul className="col-md-4 list-group">
      {blogItems}
    </ul>
  );
};


export default BlogList;





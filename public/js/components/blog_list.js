import React from 'react';
import BlogListItem from './blog_list_item';


function compare(a,b) {
  if (a.date > b.date)
    return -1;
  else if (a.date < b.date)
    return 1;
  else
    return 0;
}

const BlogList = ({blogs}) => {
  if(blogs.length === 0){
    return(
      <div></div>
    )
  }
  const blogItems = blogs.sort(compare).map((blog,i)=>{
    return (
      <BlogListItem key={i} blog={blog}></BlogListItem>
    )
  });
  return(
    <ul className="col-md-4 list-group">
      {blogItems}
    </ul>
  );
};


export default BlogList;





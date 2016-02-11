import React,{Component} from 'react'
import {blogs} from './blog_data'
import BlogList from './blog_list'


class Blogs extends Component{
  constructor(props) {
    super(props)
    this.state = {
      blogs:blogs
    };
  }
  render() {
    return (
      <div>
        <BlogList blogs={this.state.blogs}/>
      </div>
    )
  }
}

export default Blogs
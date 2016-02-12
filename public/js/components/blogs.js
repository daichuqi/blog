import React,{Component} from 'react'
import {blogs} from './blog_data'
import BlogList from './blog_list'
import {getJSON} from '../utils/AppUtils'


class Blogs extends Component{
  constructor(props) {
    super(props)
    this.state = {
      blogs:blogs
    };
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="container">
        <BlogList blogs={this.state.blogs}/>
      </div>
    )
  }
}

export default Blogs
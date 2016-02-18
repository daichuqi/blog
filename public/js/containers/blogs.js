import React,{Component} from 'react'
import BlogList from '../components/blog_list'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogs} from '../actions/index'


class Blogs extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBlogs();
  }
  render() {
    return (
      <div className="container">
        <BlogList blogs={this.props.blogs} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchBlogs},dispatch);
}

function mapStateToProps(state){
  return {blogs:state.blogs}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

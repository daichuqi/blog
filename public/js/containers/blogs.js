import React,{Component} from 'react'
import BlogList from '../components/blog_list'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogs,clearBlogs} from '../actions/index'


class Blogs extends Component{
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // this.props.fetchBlogs();
  }
  componentWillUnmount() {
    // this.props.clearBlogs();
  }
  render() {
    console.log(this.props.blogs);
    return (
      <div className="container">
        <BlogList blogs={this.props.blogs} />
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchBlogs,clearBlogs},dispatch);
// }

// function mapStateToProps(state){
//   return {blogs:state.blogs}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Blogs);


export default Blogs;

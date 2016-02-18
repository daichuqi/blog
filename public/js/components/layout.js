import React,{Component} from 'react'
import TobNavbar from './navbar'
import Blogs from '../containers/blogs'


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBlogs} from '../actions/index'


class Layout extends Component {
  componentWillMount() {
    this.props.fetchBlogs();
  }
  render() {
    let content;
    if(!this.props.children){
      content = <Blogs blogs = {this.props.blogs}/>
    }else{
      content = this.props.children
    }
    return (
      <div>
        <TobNavbar />
        <div>
          {content}
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
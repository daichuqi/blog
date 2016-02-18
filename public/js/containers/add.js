import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import {findDOMNode} from 'react-dom'
import {simplePost} from '../utils/AppUtils'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clearBlogs,addBlog,fetchBlogs} from '../actions/index'


class Add extends Component {
  constructor(props){
    super(props);
    this.handlePost = this.handlePost.bind(this);
  }
  handlePost(){
    var blog = {
      title:findDOMNode(this.refs.title).value,
      text:findDOMNode(this.refs.text).value,
    }
    if(blog.title && blog.text){
      this.props.clearBlogs();
      simplePost('/postBlog', blog).then((response) => {
        this.props.fetchBlogs()
        browserHistory.push('/');
      }).catch((err) => {
        console.log('postblog failed: ', err);
      });
    }
  }
  render(){
    return (
      <div className="container">
        <div className="titleInputBox">
          <input size="61" max="60" type="text" ref="title" placeholder="请输入标题..."/>
        </div>
        <textarea ref="text" className="textInputBox" rows="12" cols="90" ></textarea>
        <div><Button onClick={this.handlePost} bsStyle="primary">POST</Button></div>
      </div>
      )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({clearBlogs,addBlog,fetchBlogs},dispatch);
}

export default connect(null, mapDispatchToProps)(Add);
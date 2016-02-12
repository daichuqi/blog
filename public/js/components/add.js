import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import {findDOMNode} from 'react-dom'
import {postJSON} from '../utils/AppUtils'

class Add extends Component {
  constructor(props){
    super(props);
    this.handlePost = this.handlePost.bind(this);
  }
  handlePost(){
    var blog = {
      title:findDOMNode(this.refs.title).value,
      text:findDOMNode(this.refs.text).value,
      date:new Date
    }
    if(blog.title && blog.text){
      postJSON('/postblog', blog);
    }

  }
  render(){
    return (
      <div className="container">
        <div className="titleInputBox">
          <input size="51" max="50" type="text" ref="title" />
        </div>
        <textarea ref="text" className="textInputBox" rows="8" cols="60"></textarea>
        <div><Button onClick={this.handlePost} bsStyle="primary">POST</Button></div>
      </div>
      )
  }
}

export default Add

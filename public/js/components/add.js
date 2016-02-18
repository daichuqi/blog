import React,{Component} from 'react'
import {Button} from 'react-bootstrap'
import {findDOMNode} from 'react-dom'
import {postJSON} from '../utils/AppUtils'
import { browserHistory } from 'react-router'

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
      browserHistory.push('/blogs');
    }
  }
  render(){
    return (
      <div className="container">
        <div className="titleInputBox">
          <input size="61" max="60" type="text" ref="title" />
        </div>
        <textarea ref="text" className="textInputBox" rows="12" cols="90"></textarea>
        <div><Button onClick={this.handlePost} bsStyle="primary">POST</Button></div>
      </div>
      )
  }
}

export default Add

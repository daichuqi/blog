import React,{Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom'
import {updateBlog,deleteBlog} from '../actions/index'
import {Button} from 'react-bootstrap'
import {simplePost} from '../utils/AppUtils'
import { browserHistory } from 'react-router'

class Edit extends Component {
  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.onTitleInputChange = this.onTitleInputChange.bind(this);
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.state = {
      title:this.props.blog.title,
      text:this.props.blog.text
    }
  }
  onTitleInputChange(event){
    this.setState({title:event.target.value});
  }
  onTextInputChange(event){
    this.setState({text:event.target.value});
  }
  handleUpdate(){
    let blog = {
      title:findDOMNode(this.refs.title).value,
      text:findDOMNode(this.refs.text).value,
      id:this.props.params._id
    }
    if(blog.title && blog.text){
      this.props.updateBlog(blog);
      simplePost('/updateBlog', blog).then((response) => {
        browserHistory.push('/');
      }).catch((err) => {
        console.log('postblog failed: ', err);
      });
    }
  }
  handleDelete(){
    let id = {id:this.props.params._id}
    this.props.deleteBlog(id);
    simplePost('/deleteBlog', id);
    browserHistory.push('/');
  }
  render(){
    return (
      <div className="container">
        <div className="titleInputBox">
          <input
            onChange={this.onTitleInputChange}
            size="61" max="60" type="text" ref="title"
            value={this.state.title}
          />
        </div>
        <textarea
          onChange={this.onTextInputChange}
          ref="text" className="textInputBox" rows="12" cols="90"
          value={this.state.text}>
        </textarea>
        <div>
          <Button onClick={this.handleUpdate} bsStyle="primary">UPDATE</Button>
          <Button onClick={this.handleDelete} bsStyle="primary">DELETE</Button>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateBlog,deleteBlog},dispatch);
}

function mapStateToProps(state){
  return {blog:state.blog};
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

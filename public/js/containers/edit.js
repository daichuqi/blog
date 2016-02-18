import React,{Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom'
import {fetchOneBlog,clearBlog,clearBlogs} from '../actions/index'
import {Button} from 'react-bootstrap'
import {simplePost} from '../utils/AppUtils'
import { browserHistory } from 'react-router'

class Edit extends Component {
  constructor(props){
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {
    this.props.fetchOneBlog(this.props.params._id);
  }
  componentWillUnmount() {
    this.props.clearBlog();
  }
  handleUpdate(){
    let blog = {
      title:findDOMNode(this.refs.title).value,
      text:findDOMNode(this.refs.text).value,
      id:this.props.params._id
    }
    if(blog.title && blog.text){
      this.props.clearBlogs();
      simplePost('/updateBlog', blog).then((response) => {
        browserHistory.push('/');
      }).catch((err) => {
        console.log('postblog failed: ', err);
      });
    }
  }
  handleDelete(){
    let id = {id:this.props.params._id}
    this.props.clearBlogs();
    simplePost('/deleteBlog', id);
    browserHistory.push('/');
  }
  render(){
    return (
      <div className="container">
        <div className="titleInputBox">
          <input
            onChange={function() {}}
            size="61" max="60" type="text" ref="title"
            defaultValue={this.props.blog.title || ''}
          />
        </div>
        <textarea
          onChange={function() {}}
          ref="text" className="textInputBox" rows="12" cols="90"
          defaultValue={this.props.blog.text || ''}>
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
  return bindActionCreators({fetchOneBlog,clearBlog,clearBlogs},dispatch);
}

function mapStateToProps(state){
  return {blog:state.blog};
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

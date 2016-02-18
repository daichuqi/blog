import React,{Component} from 'react'
import TobNavbar from './navbar'
import Blogs from '../containers/blogs'

export default class Layout extends Component {

  render() {
    let content;
    if(!this.props.children){
      content = <Blogs/>
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
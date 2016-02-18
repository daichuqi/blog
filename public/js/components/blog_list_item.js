import React,{Component} from 'react';
import { Link } from 'react-router'

var parseTime = function(date){
  return new Date(Number(date)).toString().slice(0,15);
}

class BlogListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      blog:this.props.blog,
      date:parseTime(this.props.blog.date),
      section: {__html:this.props.blog.text.split("\n").join('<br />')}
    }
  }
  render() {
    return (
      <li className="blog_item">
        <div className="blog_title">{this.state.blog.title}
          <span className="blog_date">{this.state.date}</span>
        </div>
        <div dangerouslySetInnerHTML={ this.state.section } className="blog_section" />
        <Link to={`/edit/${this.state.blog._id}`}>Edit</Link>
    </li>
    )
  }
}


export default BlogListItem;

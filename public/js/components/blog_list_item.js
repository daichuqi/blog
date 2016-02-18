import React,{Component} from 'react';
import { Link } from 'react-router'

class BlogListItem extends Component {
  constructor(props){
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.state = {
      blog:this.props.blog,
      date:this.props.blog.date.slice(3,15),
      section: {__html:this.props.blog.text.split("\n").join('<br />')}
    }
  }
  onEdit(){
    console.log('edit click');
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

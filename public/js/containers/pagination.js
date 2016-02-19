import React,{Component} from 'react';
import {Pager,PageItem} from 'react-bootstrap';
import {selectPage} from '../actions/index';

class PageBar extends Component{
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.state = {
      currentPage: 0,
      prevDisabled:false,
      nextDisabled:false
    }
  }

  handleNext(){
    if(this.state.currentPage+1>=0){
      this.setState({prevDisabled:false});
    }
    selectPage(this.state.currentPage+1);
    this.setState({
      currentPage:this.state.currentPage+1
    });
  }
  handlePrev(){
    if(this.state.currentPage-1<0){
      this.setState({prevDisabled:true});
    }
    selectPage(this.state.currentPage-1);
    this.setState({currentPage:this.state.currentPage-1});
  }

  render() {
    return (
      <div className="pager">
        <a
          onClick={this.handlePrev}
          className={this.state.prevDisabled?"prevPager hidden":"prevPager"}
          href="#">上一页
        </a>
        <a
          onClick={this.handleNext}
          className={this.state.nextDisabled?"nextPager hidden":"nextPager"}
          href="#">下一页
        </a>
      </div>
    )
  }
}

export default PageBar;
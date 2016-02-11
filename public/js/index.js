import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory } from 'react-router'
import Layout from './components/layout'
import Add from './components/add'
import Blogs from './components/blogs'

// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list'
// import VideoDetail from './components/video_detail'
import _ from 'lodash'

const mountNode = document.querySelector('.box');

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="add" component={Add} />
          <Route path="blogs" component={Blogs} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App /> , mountNode);
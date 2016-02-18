import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, browserHistory } from 'react-router'
import Layout from './components/layout'
import Notfound from './components/notfound'

import Add from './containers/add'
import Blogs from './containers/blogs'
import Edit from './containers/edit'

import _ from 'lodash'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const mountNode = document.querySelector('.box');

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="add" component={Add}  />
          <Route path="edit/:_id" component={Edit} />
          <Route path="*" component={Notfound} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, mountNode);






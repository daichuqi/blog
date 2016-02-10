import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.querySelector('.container')
class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        hello world
      </div>
    );
  }

}

ReactDOM.render(<App /> , mountNode);

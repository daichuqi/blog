import React, { Component } from 'react'

const searchBarStyle = {
  'margin': '30px',
  'borderStyle': 'solid'
}

class SearchBar extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <input style={searchBarStyle} className="col-md-8" />
      </div>
      )
  }
}

export default SearchBar;
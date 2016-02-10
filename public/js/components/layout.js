import React from 'react'
import Navbar from './navbar'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}



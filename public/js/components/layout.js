import React from 'react'
import TobNavbar from './navbar'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <TobNavbar />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
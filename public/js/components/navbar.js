import React from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Link to="/add">Add</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    )
  }
}

export default Navbar
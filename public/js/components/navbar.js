import React from 'react'
import { Link } from 'react-router'
import { Navbar,Nav,NavDropdown,MenuItem,NavItem } from 'react-bootstrap';

class TobNavbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">SimpleBlog</Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <li eventKey={1}><Link to="/add">Add</Link></li>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <li eventKey={3.1}><Link to="/add">Add</Link></li>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
     </Navbar>
    )
  }
}

export default TobNavbar
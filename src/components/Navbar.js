import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="indigo" dark expand="md" sticky="top" scrolling>
          <NavbarBrand href="/">
            <strong>Navbar</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Pricing</NavLink>
              </NavItem>
            </NavbarNav>
            {console.log(NavbarNav)}
            <NavbarNav>
              <NavItem>
                <form className="form-inline">
                  <i className="fa fa-user icon-profile" />
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink to="#">Logout</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default NavbarHeader;

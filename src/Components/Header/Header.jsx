import React, { Component } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

class Header extends Component {
  state = {};
  render() {
    const { athleteName, onChange } = this.props;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            {athleteName}'s parkrun Stats
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Barcode Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;

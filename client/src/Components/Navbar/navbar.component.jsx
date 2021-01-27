import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "./navbar.style.css";

const MyNavbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  let redirectPath =
    process.env.NODE_ENV === "production"
      ? "https://localhost:3001/oauth/logout"
      : "https://localhost:3001/oauth/logout";

  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="md"
        variant="white"
        className=""
      >
        <Navbar.Brand href="#home">
          <img className="logo" alt="website logo" />
        </Navbar.Brand>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="SpinIt" caret>
            <strong>SpinIt</strong>
          </DropdownToggle>
          <DropdownMenu style={{ background: "grey" }}>
            <Nav className="mr-auto" navbar>
              <DropdownItem>
                <NavLink style={{ color: "black" }} href="/Map">
                  Map
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink style={{ color: "black" }} href="/profile">
                  Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink style={{ color: "black" }} href="/feed">
                  Feed
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink style={{ color: "black" }} href={redirectPath}>
                  Logout
                </NavLink>
              </DropdownItem>
            </Nav>
          </DropdownMenu>
        </Dropdown>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#register">Register</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#feed">Feed</Nav.Link>
                    <Nav.Link href="#map">Map</Nav.Link>
                </Nav>
            </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default MyNavbar;

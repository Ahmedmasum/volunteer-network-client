import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import headerLogo from "../../Resources/logos/Group 1329.png";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Container className="container">
      <Navbar expand="lg" variant="light" bg="transparent">
        <Navbar.Brand href="#">
          <Link to="/">
            {" "}
            <img style={{ width: "150px" }} src={headerLogo} alt="" />
          </Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link>
              <Link style={{ color: "gray" }} to="/">
                Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Donation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link style={{ color: "gray" }} to="/registered-events">
                Events
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Blogs</Nav.Link>
          </Nav.Item>
        </Nav>

        <div>
          <Button variant="contained" color="primary">
            Registration
          </Button>
          <Button variant="contained" color="secondary">
            <Link style={{ color: "white" }} to="/admin-panel">
              Admin
            </Link>
          </Button>
          {loggedInUser.email ? (
            <Button
              onClick={() => setLoggedInUser({})}
              variant="contained"
              color="Primary"
            >
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="Primary">
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
            </Button>
          )}
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;

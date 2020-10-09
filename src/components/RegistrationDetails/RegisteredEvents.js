import React, { useContext, useEffect, useState } from "react";

import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

import logoImage from "../../Resources/logos/Group 1329.png";
import EventsCard from "./EventsCard";
import "./RegisteredEvents.css";

const RegisteredEvents = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  console.log(registeredEvents);

  useEffect(() => {
    fetch("https://protected-reaches-22955.herokuapp.com/registeredEvents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: loggedInUser.email,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setRegisteredEvents(result);
      });
  }, [loggedInUser.email]);
  return (
    <Container>
      <Container className="header-container">
        <Link to="/">
          {" "}
          <img style={{ width: "150px" }} src={logoImage} alt="" />
        </Link>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="#donations">
              Donations
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="#events">
              Events
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="#blogs">
              Blogs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-name">{loggedInUser.name}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setLoggedInUser({})} className="nav-name">
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Container className="body-container">
        {registeredEvents.map((event) => (
          <EventsCard data={event}></EventsCard>
        ))}
      </Container>
    </Container>
  );
};

export default RegisteredEvents;

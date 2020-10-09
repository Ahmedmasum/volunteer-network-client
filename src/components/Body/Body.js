import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import CardItem from "../Card/CardItem";
import "./Body.css";
// import fakeData from "../Data/Data";

const Body = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://protected-reaches-22955.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <Container className="cardItems">
      {events.map((dt) => (
        <CardItem data={dt} key={dt._id}></CardItem>
      ))}
    </Container>
  );
};

export default Body;

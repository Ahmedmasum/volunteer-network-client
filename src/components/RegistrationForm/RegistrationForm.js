import { TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logoImage from "../../Resources/logos/Group 1329.png";

import "./RegistrationForm.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const RegistrationForm = () => {
  const [eventData, setEventData] = useState({});

  const [loggedInUser] = useContext(UserContext);
  // const [form, setForm] = useState();
  // console.log(loggedInUser);
  const [registeredEvent, setRegisteredEvent] = useState();
  const { cardId } = useParams();

  const history = useHistory();

  useEffect(() => {
    fetch(`https://protected-reaches-22955.herokuapp.com/events/${cardId}`)
      .then((res) => res.json())
      .then((data) => setEventData(data));
  }, [cardId]);

  const handleChange = (e) => {
    let isFieldValue = true;

    if (e.target.name === "name") {
      isFieldValue = e.target.value;
    }
    if (e.target.name === "email") {
      isFieldValue = e.target.value;
    }
    if (e.target.name === "data") {
      isFieldValue = e.target.value;
    }
    if (e.target.name === "description") {
      isFieldValue = e.target.value;
    }
    if (e.target.name === "title") {
      isFieldValue = e.target.value;
    }
    if (isFieldValue) {
      const newRegisteredEvent = {
        ...registeredEvent,
        ...loggedInUser,
        ...eventData,
      };
      newRegisteredEvent[e.target.name] = e.target.value;
      setRegisteredEvent(newRegisteredEvent);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://protected-reaches-22955.herokuapp.com/registeredEvent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registeredEvent),
    })
      .then((res) => {
        if (res) {
          toast.success("Registration Successfully Completed", {
            position: toast.POSITION.TOP_RIGHT,
          });
          history.push("/registered-events");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="registration-container">
      <Link to="/">
        <img className="logoImage" src={logoImage} alt="logoImage" />
      </Link>
      <Container className="form-container">
        <h5>Register as a Volunteer</h5>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            className="form-input"
            required
            id="standard-required"
            label="Full Name"
            value={loggedInUser.name}
            type="text"
            name="name"
            // onBlur={(e) => setForm({ ...form, name: e.target.value })}
            onChange={handleChange}
          />
          <TextField
            className="form-input"
            required
            id="standard-required"
            value={loggedInUser.email}
            label="Email"
            type="email"
            name="email"
            // onBlur={(e) => setForm({ ...form, email: e.target.value })}
            onChange={handleChange}
          />
          <TextField
            className="form-input"
            name="date"
            id="date"
            label="Date"
            required
            type="date"
            onChange={handleChange}
            // onBlur={(event) =>
            //   setForm({
            //     ...form,
            //     date: new Date(event.target.value).toDateString(),
            //   })
            // }
          />

          <TextField
            className="form-input"
            required
            id="standard-required"
            label="Description"
            type="text"
            name="description"
            // onBlur={(e) => setForm({ ...form, description: e.target.value })}
            onChange={handleChange}
          />
          <TextField
            className="form-input"
            required
            id="standard-required"
            label="Event"
            value={eventData.title}
            type="text"
            name="title"
            // onBlur={(event) => setForm({ ...form, title: event.target.value })}
            onChange={handleChange}
          />
          <input className="form-input" type="submit" value="Registration" />
        </form>
      </Container>
    </Container>
  );
};

export default RegistrationForm;

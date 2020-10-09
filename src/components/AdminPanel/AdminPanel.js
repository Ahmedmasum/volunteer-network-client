import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "./AdminPanel.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

// import eventsData from "../Data/Data";

toast.configure();

const AdminPanel = () => {
  // const { register, handleSubmit } = useForm();
  // const [title, setTitle] = useState();
  // const [file, setFile] = useState({ img: "https://imgur.com/XDR2o8k.png" });
  // const [description, setDescription] = useState();
  // const [date, setDate] = useState();
  const [event, setEvent] = useState();
  console.log(event);

  const history = useHistory();

  const handleSubmit = () => {
    // const data = new FormData();
    // data.append("title", title);

    // data.append("description", description);
    // data.append("date", date);
    // data.append("file", file);

    fetch("https://protected-reaches-22955.herokuapp.com/addEvents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    })
      .then((res) => {
        if (res) {
          toast.success("One Event Created Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
          history.push("/");
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <Container className="addEvents-container">
      <h5>Add Event</h5>
      <form className="addEvents-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="eventTitle"
          placeholder="Event Title"
          id="title"
          onBlur={(event) => setEvent({ ...event, title: event.target.value })}
        />
        <input
          type="text-area"
          name="description"
          placeholder="Description"
          id="description"
          onBlur={(event) =>
            setEvent({ ...event, description: event.target.value })
          }
        />
        <input
          type="date"
          name="eventDate"
          id="date"
          onBlur={(event) =>
            setEvent({
              ...event,
              date: event.target.value,
            })
          }
        />
        {/* <input
          type="text"
          name="image"
          value="foodCharity.png"
          onBlur={(event) => setEvent({ ...event, image: "foodCharity.png" })}
        /> */}

        <input type="submit" value="Create Event" />
      </form>
    </Container>
  );
};

export default AdminPanel;

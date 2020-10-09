import React from "react";

import "./EventsCard.css";
const EventsCard = ({ data }) => {
  const handleClick = (id) => {
    fetch("https://protected-reaches-22955.herokuapp.com/cancel-event", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        id: id,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
  };
  // const handleClick = (id) => {
  //   console.log(id);

  //   fetch(`http://localhost:5000/delete-registeredEvent/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result) {
  //         console.log(result);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="event-card">
      <img
        className="eventCard-img"
        src={require(`../../Resources/images/${data.image}`)}
        alt=""
      />

      <div className="eventCard-details">
        <p>{data.title}</p>
        <p>{data.date}</p>
        <button onClick={() => handleClick(data._id)}>Cancel</button>
      </div>
    </div>
  );
};

export default EventsCard;

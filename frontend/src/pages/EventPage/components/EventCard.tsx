// import React from "react";

import "./styles.scss";

const EventCard = () => {
  return (
    <div className="event-box">
      <div className="date">
        <div className="day">27</div> 
        <div className="month">Oct</div>
      </div>

      <div className="event-info">
        <div className="location-type">Location | Event Type</div>
        <a href="" className="title">Event Title</a>
        <div className="date-time">Date and Time</div>
        {/* <a href="#" className="add-to-calendar">Add to Calendar</a> */}
      </div>
    </div>
  );
};

export default EventCard;

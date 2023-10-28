// import React from "react";

import "./styles.scss";

interface EventCardProps {
  day: string;
  month: string;
  location: string;
  type: string;
  subject: string;
  date: string;

}


const EventCard = ({day, month, location, type, subject, date}: EventCardProps) => {
  return (
    <div className="event-box">
      <div className="date">
        <div className="day">{day}</div> 
        <div className="month">{month}</div>
      </div>

      <div className="event-info">
        <div className="location-type">{location} | {type}</div>
        <a href="" className="title">{subject}</a>
        <div className="date-time">{date}</div>
        {/* <a href="#" className="add-to-calendar">Add to Calendar</a> */}
      </div>
    </div>
  );
};

export default EventCard;

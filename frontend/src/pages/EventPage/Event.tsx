import React from 'react';
import './Event.scss'; 

const Event: React.FC = () => {
  return (
    <div className="event-page">
      <h1 className="header">Upcoming Events</h1>
      <div className="line"></div>

      <div className="event-box">
        <div className="event-info">
          <div className="date">27 Oct</div>
          <div className="location-type">Location | Event Type</div>
          <div className="title">Event Title</div>
          <div className="date-time">Date and Time</div>
          <a href="#" className="add-to-calendar">Add to Calendar</a>
        </div>
      </div>

      <div className="line"></div>

      <div className="event-box">
        <div className="event-info">
          <div className="date">27 Oct</div>
          <div className="location-type">Location | Event Type</div>
          <div className="title">Event Title</div>
          <div className="date-time">Date and Time</div>
          <a href="#" className="add-to-calendar">Add to Calendar</a>
        </div>
      </div>

      <div className="line"></div>

      <div className="event-box">
        <div className="event-info">
          <div className="date">27 Oct</div>
          <div className="location-type">Location | Event Type</div>
          <div className="title">Event Title</div>
          <div className="date-time">Date and Time</div>
          <a href="#" className="add-to-calendar">Add to Calendar</a>
        </div>
      </div>
      
    </div>
  );
};

export default Event;

import React from 'react';
import './Event.scss'; 
import Navbar from '../../components/navbar/Navbar';
import EventCard from './components/EventCard';

const Event: React.FC = () => {
  return (
    <div className="event-page">
      <Navbar/>
      <h1 className="header">Upcoming Events</h1>
      <div className="line"></div>

      <EventCard/>
      
    </div>
  );
};

export default Event;

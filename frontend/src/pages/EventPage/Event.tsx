import React from 'react';
import './Event.scss'; 
import Navbar from '../../components/navbar/Navbar';
import EventCard from './components/EventCard';

import { useGetEventsQuery } from '../../services/expressApi';

const Event: React.FC = () => {

  const { data: events = [], error, isLoading } = useGetEventsQuery();

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occured contact the administrator</div>

  console.log(events);
  
  
  return (
    <div className="event-page">
      <Navbar/>
      <h1 className="header">Upcoming Events</h1>
      <div className="line"></div>

      {events.map((event) => (
        <EventCard day={event.day} date={event.date} month ={event.month} location={event.location} type={event.type} subject={event.subject}/>
      ))}
      
        

      
    </div>
  );
};

export default Event;

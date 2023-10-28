import React, {useState} from 'react';
import './styles.scss'; 
import Navbar from '../../components/navbar/Navbar';
import { useSelector } from 'react-redux';

import { useGetEventsQuery, useCreateEventMutation } from '../../services/expressApi';

const EventCreation: React.FC = () => {
  
  const { user } = useSelector((state: any) => state.auth);

  const [hideModal, setHideModal] = useState(true);
  const [subject, setSubject] = useState("");
  const [dtstart, setDtstart] = useState("");
  const [dtend, setDtend] = useState("");
  const [all_day_event, setAll_day_event] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [attendees, setAttendees] = useState("");

  const [createEvent, response] = useCreateEventMutation();



  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const event: any = {
      subject,
      dtstart,
      dtend,
      all_day_event: all_day_event === "true" ? true : false,
      description,
      location,
      type,
      organizer: user
    }
    createEvent(event).unwrap()
    .then((originalPromiseResult) => {
      console.log(originalPromiseResult);
    });
  };
  
  
  return (
    <div className="event-page">
      <Navbar/>
      <h1 className="header">Create Event</h1>
      <div className="line"></div>

      
        
      
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className='formRow'>
            <label htmlFor="subject">Subject</label>
            <input
            className='formInput'
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className='formRow'>
            <label htmlFor="dtstart">Start Date</label>
            <input
            className='formInput'
              type="text"
              name="dtstart"
              id="dtstart"
              value={dtstart}
              onChange={(e) => setDtstart(e.target.value)}
            />
          </div>

          <div className='formRow'>
            <label htmlFor="dtend">End Date</label>
            <input
            className='formInput'
              type="text"
              name="dtend"
              id="dtend"
              value={dtend}
              onChange={(e) => setDtend(e.target.value)}
            />
          </div>

          <div className='formRow'>
            <label htmlFor="all_day_event">All Day Event</label>
            <input
            className='formInput'
              type="text"
              name="all_day_event"
              id="all_day_event"
              value={all_day_event}
              onChange={(e) => setAll_day_event(e.target.value)}
            />
          </div>

          <div className='formRow'>
            <label htmlFor="description">Description</label>
            <input
            className='formInput'
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='formRow'>
            <label htmlFor="location">Location</label>
            <input
            className='formInput'
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className='formRow'>
    
            <label htmlFor="type">Type</label>
            <input
              className='formInput'
                type='text'
                name='type'
                id='type'
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
          </div>


          <button type="submit">Submit</button>
        </form>
      
      
    </div>
  );
};

export default EventCreation;

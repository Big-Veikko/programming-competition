import * as ics from 'ics';
import { IEvent} from './model';
import moment from 'moment';
import { writeFileSync } from 'fs';

export const createCalendarEvent = (event: IEvent) => {
    const organizer: ics.Person = {
        name: event.organizer.name,
        email: event.organizer.email
    }

    const attendee: ics.Attendee[] = event.attendees.map( (attendee) => ({
        name: attendee.name,
        email: attendee.email
    }));

    let start_date: ics.DateArray;
    let end_date: ics.DateArray;

    if (event.all_day_event){
        const start: Date= new Date(moment(event.dtstart.split(":")[1]).format('YYYY-MM-DD'));;
        const end: Date  = new Date(moment(event.dtend.split(":")[1]).format('YYYY-MM-DD'));;
        start_date = [start.getFullYear(), start.getMonth()+1, start.getDate()];
        end_date  = [end.getFullYear(), end.getMonth()+1, end.getDate()];
        console.log(start_date, end_date);
        
    } else {
        const start: Date= new Date(moment(event.dtstart).format('YYYY-MM-DD HH:mm:ss'));;
        const end: Date  = new Date(moment(event.dtend).format('YYYY-MM-DD HH:mm:ss'));;
        start_date = [start.getFullYear(), start.getMonth() +1, start.getDate(), start.getUTCHours(), start.getUTCMinutes()];
        end_date  = [end.getFullYear(), end.getMonth() +1, end.getDate(), end.getUTCHours(), end.getUTCMinutes()];
        console.log(start_date, end_date);
    }
    
    const event_status = event.status === "CONFIRMED" ? 'CONFIRMED' : 'TENTATIVE';
    const event_transp = event.transp === "OPAQUE" ? 'OPAQUE' : 'TRANSPARENT';
    const event_classification = event.private ? 'PRIVATE' : 'PUBLIC';
    

    const someEvent: ics.EventAttributes = {
        start: start_date,
        end: end_date,
        startInputType: 'utc',
        startOutputType:'utc',

        endInputType:'utc',
        endOutputType:'utc',

        title: event.subject,
        description: event.description? event.description : "No description",

        location: event.location? event.location : "No location",

        status: event_status,
        busyStatus: 'BUSY',
        transp: event_transp,

        organizer: organizer ,
        attendees: attendee,

        classification: event_classification,

        uid: event.id,
        sequence: 0,
        calName: 'XlporAlumni Calendar',
        created: start_date,
        lastModified: start_date
    }

    ics.createEvent(someEvent, (error, value) => {
        if (error) {
            console.log(error)
        }
        writeFileSync(`${__dirname}/event.ics`, value)
    })

}
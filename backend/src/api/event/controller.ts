import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";
import { IEvent, IEventRequest, IEventResponse } from "./model";
import { createCalendarEvent } from "./utils";
import moment from 'moment';



export const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let events = await prisma.event.findMany({
            where: {
                private: false,
                type: "event"
            },
            select: {
                id: true,
                subject: true,
                dtstart: true,
                dtend: true,
                organizer: true,
                description: true,
                all_day_event: true,
                location: true,
                type: true,
            }
        });

        // process events to format dtstart and dtend for all day events
        events.forEach(event => {
            if (event.all_day_event) {
                event.dtstart = event.dtstart.split(":")[1];
                event.dtend = event.dtend.split(":")[1];
            }
        });

        let eventsResponse: IEventResponse[] = [];
        events.forEach(event => {
            const eventResponse: IEventResponse = {
                id: event.id,
                day: new Date(moment(event.dtstart.split(":")[1]).format('YYYY-MM-DD')).getUTCDate().toString(),
                month: new Date(moment(event.dtstart.split(":")[1]).format('YYYY-MM-DD')).getUTCMonth().toString(),
                location: event.location? event.location: "No Location",
                type: event.type,
                subject: event.subject,
                date: new Date(moment(event.dtstart.split(":")[1]).format('YYYY-MM-DD')).toString()
                
            }
            eventsResponse.push(eventResponse);
        });    

        
        res.status(200).json(eventsResponse)
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const getEvent= async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const event = await prisma.event.findUnique({
            where: {
                id: String(id)
            }
        });
        res.status(200).json(event)
        
        res.status(200).json({message: ""})
    } catch (error: any) {
        res.status(500).json({message: "Get todo failed"})
    }
}

export const createEvent = async (req: Request<IEventRequest>, res: Response, next: NextFunction) => {
    try {
        const {subject, dtstart, dtend, all_day_event, description, location, type, organizer, attendees} = req.body;

        // creating an all day event
        if (all_day_event) {
            // formate the value of dtstart and dtend to ;VALUE=DATE:20231120
            const dtstart_formatted = `;VALUE=DATE:${dtstart}`;
            const dtend_formatted = `;VALUE=DATE:${dtend}`;
            const event: any = await prisma.event.create({
                data: {
                    subject: subject,
                    dtstart: dtstart_formatted,
                    dtend: dtend_formatted,
                    all_day_event: all_day_event,
                    description: description,
                    location: location,
                    private: true,
                    type: type,
                    status: "CONFIRMED",
                    sequence: 0,
                    priority: 0,
                    dtstamp: new Date().toISOString(),
                    transp: "TRANSPARENT",
                    organizer: organizer,
                    attendees: attendees
                }
            });

            createCalendarEvent(event);

            res.status(200).json({message: "Event created successfully"});   
        } else {
            const event: any = await prisma.event.create({
                data: {
                    subject: subject,
                    dtstart: dtstart,
                    dtend: dtend,
                    all_day_event: all_day_event,
                    description: description,
                    location: location,
                    private: true,
                    type: type,
                    status: "CONFIRMED",
                    sequence: 0,
                    priority: 0,
                    dtstamp: new Date().toISOString(),
                    transp: "OPAQUE",
                    organizer: organizer,
                    attendees: attendees
                }
            });

            createCalendarEvent(event);
            res.status(200).json({message: "Event created successfully"});
        }

    } catch (error: any) {
        console.error(error);
        
        res.status(500).json({message: error.message})
    }
}

export const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updateEvent = await prisma.event.update({
            where: {
                id: String(req.params.id)
            },
            data:req.body
            
        });

        res.status(200).json(updateEvent)
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.event.delete({
            where: {
                id: String(req.params.id)
            }
        });
        res.status(204).json({message: "Event deleted successfully"})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const attendEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const {name, email} = req.body;
        const attendeesFound = await prisma.event.findUnique({
            where: {
                id: String(id)
            },
            select: {
                attendees: true
            }
        });

        const existingAttendees = attendeesFound?.attendees

        const formatedAttendees: any = existingAttendees?.map( (attendee: any) => ({name: attendee.name, email: attendee.email}))

        const attendees = [...formatedAttendees, {name: name, email: email}]

        const event = await prisma.event.update({
            where: {
                id: String(id)
            },
            data: {
                attendees: {
                    set: attendees.map( attendee => ({ ...attendee }))

                }
            }
        });
        
        res.status(200).json(event)
    } catch (error: any) {
        console.error(error);
        res.status(500).json({message: error.message})
    }
}

export const unattendEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        res.status(200).json({message: ""})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const approveEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const event = await prisma.event.update({
            where: {
                id: String(id)
            },
            data: {
                private: false
            }
        });
        res.status(200).json({message: "Event approved successfully"})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}
import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";
import { IEventRequest } from "./model";


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
                all_day_event: true
            }
        });

        // process events to format dtstart and dtend for all day events
        events.forEach(event => {
            if (event.all_day_event) {
                event.dtstart = event.dtstart.split(":")[1];
                event.dtend = event.dtend.split(":")[1];
            }
        });


        res.status(200).json(events)
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
            const event = await prisma.event.create({
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

            res.status(200).json({message: "Event created successfully"});   
        } else {
            const event = await prisma.event.create({
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

            res.status(200).json({message: "Event created successfully"});
        }

    } catch (error: any) {
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

        res.status(200).json({message: ""})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const attendEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        res.status(200).json({message: ""})
    } catch (error: any) {
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
        
        res.status(200).json({message: ""})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}
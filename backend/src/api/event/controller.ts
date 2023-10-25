import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


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

export const createEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.status(200).json({message: ""})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const updateEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        res.status(200).json({message: ""})
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
import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


export const getEvents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        res.status(200).json({message: ""})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const getEvent= async (req: Request, res: Response, next: NextFunction) => {
    try {
        
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
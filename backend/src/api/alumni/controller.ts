import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


export const getAlumni = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const alumni = await prisma.alumni.findMany();
        res.json(alumni);
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const getAlumnus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const alumni = await prisma.alumni.findUnique({
            where: {
                id: String(id)
            }
        });
        res.json(alumni);
    } catch (error: any) {
        res.status(500).json({message: "Get alumni failed"})
    }
}

export const createAlumni = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const alumni = await prisma.alumni.create({
            data: req.body
        });
        res.json(alumni);
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}

export const updateAlumni = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const alumni = await prisma.alumni.update({
            where: {
                id: String(id)
            },
            data: req.body
        });
        res.json(alumni);
    } catch (error: any) {
        res.status(500).json({message: "Update alumni failed"})
    }
}

export const deleteAlumni = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const alumni = await prisma.alumni.delete({
            where: {
                id: String(id)
            }
        });
        res.json(alumni);
    } catch (error: any) {
        res.status(500).json({message: "Delete alumni failed"})
    }
}



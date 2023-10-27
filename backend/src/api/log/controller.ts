import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";

export const getLogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const logs = await prisma.log.findMany();
        res.status(200).json(logs);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }
};

export const getLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const log = await prisma.log.findUnique({
            where: {
                id: String(id)
            }
        });
        res.status(200).json(log);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }

};

export const createLog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {user_id, endpoint,action} = req.body;
        const log = await prisma.log.create({
            data: {
                user_id: user_id,
                endpoint: endpoint,
                action: action
            }
        });
        res.status(200).json(log);
    } catch (error: any) {
        res.status(500).json({message: error.message});
    }

};
import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });

        if (!user || user.password !== req.body.password) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        res.status(200).json({message: "Login Successful", data: {id: user.id, email: user.email, user_type: user.user_type, status: user.status}});

    } catch (error: any) {
        res.status(500).json({message: "Login failed"})
    }
}

export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const todo = await prisma.todo.findUnique({
            where: {
                id: String(id)
            }
        });
        res.json(todo);
    } catch (error: any) {
        res.status(500).json({message: "Get todo failed"})
    }
}

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title} = req.body;
        const todo = await prisma.todo.create({
            data: {
                title: title,
            }
        });
        res.json(todo);
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}


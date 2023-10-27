import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
//Get multiple news
export const getNews = async (
    req: Request, res: Response, next: NextFunction 
) => {
    try {
        const news = await prisma.news.findMany();
        res.json(news);
    } catch (error: any) {
        res.status(500).json({
            massege: error.message
        })        
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


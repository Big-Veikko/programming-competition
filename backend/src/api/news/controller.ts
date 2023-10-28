import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


// export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const todos = await prisma.todo.findMany();
//         //console.log(todos);
//         res.json(todos);
//     } catch (error: any) {
//         res.status(500).json({message: error.message})
//     }
// }

// export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const {id} = req.params;
//         const todo = await prisma.todo.findUnique({
//             where: {
//                 id: String(id)
//             }
//         });
//         res.json(todo);
//     } catch (error: any) {
//         res.status(500).json({message: "Get todo failed"})
//     }
// }

// export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const {title} = req.body;
//         const todo = await prisma.todo.create({
//             data: {
//                 title: title,
//             }
//         });
//         res.json(todo);
//     } catch (error: any) {
//         res.status(500).json({message: error.message})
//     }
// }

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
};
//Get a specific News article
export const getNewsA = async (req: Request, res: Response, next: NextFunction) =>
{
    try {
        const {id} = req.params;
        const news = await prisma.news.findUnique({
            where: {
                id: String(id),
            },
        });
        res.json(event);
    } catch (error: any) {
        res.status(500).json({message: "Unsucessful Process"});
    }
};
//Create an event
export const createNewsA = async (req: Request, res: Response, next: NextFunction) =>
{
    try {
        const {title} = req.body;
        const event = await prisma.news.create({
            data: req.body,
        });
        res.status(200).json({message: "News article successfully created!"})
    } catch (error: any) {
        res.status(500).json({message :"Failed to create News Article! Try again later"})
    }
}


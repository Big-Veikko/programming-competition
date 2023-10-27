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
//}
//Get multiple oppertunities
export const getOpps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Opps = await prisma.opportunity.findMany();
    console.log(Opps);
    res.json(Opps);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
//get a specific oppertunity via the id
export const getOpp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const Opp = await prisma.opportunity.findUnique({
      where: { id: String(id) },
    });
    res.json(Opp);
  } catch (error: any) {
    res.status(500).json({ message: "Get Opportunities Request failed" });
  }
};
//Create an opportunity
export const createOpp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id,
    name,
    author,
    posted_date,
    description,
    requirements,
    tags,
    link,
    location,
    duration,
    salary,
    application_deadline,
    application_link,
    contact,} = req.body;
    const Opp = await prisma.opportunity.create({
      data: req.body,

    });
    res.json(Opp);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
// Update existing information
export const updateOpps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateOpps = await prisma.opportunity.update({
      where: {
        id: String(req.params.id),
      },
      data: req.body,
    });
    res.status(200).json({ message: "Job opportunity successfully updated" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Deleting the Opportunity
export const deleteOpps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteOpps = await prisma.opportunity.delete({
      where: {
        id: String(req.params.id),
      },
    });
    res.status(200).json({ message: "Job Opportunity successfully deleted!" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";

export const getGroups = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const groups = await prisma.group.findMany();
		//console.log(todos);
		res.json(groups);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const getGroup = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const group = await prisma.group.findUnique({
			where: {
				id: String(id),
			},
		});
		res.json(group);
	} catch (error: any) {
		res.status(500).json({ message: "Get todo failed" });
	}
};

export const createGroup = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { title } = req.body;
		const group = await prisma.todo.create({
			data: {
				title: title,
			},
		});
		res.json(group);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const updateGroup = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
    try {
        const group = await prisma.group.update({
            where: {
                id: String(req.params.id)
            },
            data: req.body,
        });
        res.json(group);
    } catch (error: any) {
        res.status(500).json({message: "Failed to update group"})
    }
};

export const deleteGroup = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const group = await prisma.group.delete({
			where: {
				id: String(id),
			},
		});
		res.json(group);
	} catch (error: any) {
		res.status(500).json({ message: "Failed to delete group" });
	}
};

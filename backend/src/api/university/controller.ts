import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";


export const getUniversities = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let universities = await prisma.university.findMany({
			select: {
                id: true,
				name: true,
				website: true,
				contact_email: true,
				contact_phone: true,
				address: true,
				logo: true,
				social: true,
			},
		});
		res.status(200).json(universities);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const getUniversity = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const university = await prisma.university.findUnique({
			where: {
				id: String(id),
			},
		});
		res.status(200).json(university);
	} catch (error: any) {
		res.status(500).json({ message: "Get university failed" });
	}
};

export const registerUniversity = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const {
			name,
			website,
			contact_email,
			contact_phone,
			address,
			logo,
			social,
		} = req.body;
		const university = await prisma.university.create({
			data: {
				name: name,
				website: website,
				contact_email: contact_email,
				contact_phone: contact_phone,
				address: address,
				logo: logo,
				social: social,
			},
		});
		res.status(200).json({ message: "University successfully registered" });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const updateUniversity = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// do something
	try {
		const updateUniversity = await prisma.university.update({
			where: {
				id: String(req.params.id),
			},
			data: req.body,
		});
		res.status(200).json({ message: "University successfully updated" });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteUniversity = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// do something
	try {
		const deleteUniversity = await prisma.university.delete({
			where: {
				id: String(req.params.id),
			},
		});
		res.status(200).json({ message: "University successfully deleted" });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

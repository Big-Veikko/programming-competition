import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";

export const getFundraisers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		let fundraisers = await prisma.fundraiser.findMany({
			select: {
				id: true,
				event_id: true,
				target: true,
				raised: true,
				cause: true,
				approval_status: true,
				target_status: true,
			},
		});
		res.status(200).json(fundraisers);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const getFundraiser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const fundraiser = await prisma.fundraiser.findUnique({
			where: {
				id: String(id),
			},
		});
		res.status(200).json(fundraiser);
	} catch (error: any) {
		res.status(500).json({ message: "Get fundraiser failed" });
	}
};

export const getOngoingFundraisers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const fundraisers = await prisma.fundraiser.findMany({
			where: {
				approval_status: "approved", // NOTE: not sure of the value of this field or if the correct field is used
			},
			select: {
				id: true,
				event_id: true,
				event_details: true,
				target: true,
				raised: true,
				cause: true,
				approval_status: true,
				target_status: true,
			},
		});
		res.status(200).json(fundraisers);
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const createFundraiser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const {
			event_id,
			target,
			raised,
			cause,
			approval_status,
			target_status,
		} = req.body;
		const fundraiser = await prisma.fundraiser.create({
			data: {
				event_details: {connect: {id: event_id}},
				target: target,
				raised: raised,
				cause: cause,
				approval_status: approval_status,
				target_status: target_status,
			},
		});
		res.status(200).json({ message: "Fundraiser successfully created", data: fundraiser });
	} catch (error: any) {
		console.error(error);
		
		res.status(500).json({ message: error.message });
	}
};

export const updateFundraiser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// do something
	try {
		const updateFundraiser = await prisma.fundraiser.update({
			where: {
				id: String(req.params.id),
			},
			data: req.body,
		});
		res.status(200).json({ message: "fundraiser successfully updated" });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const approveFundraiser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const approveFundraiser = await prisma.fundraiser.update({
			where: {
				id: String(req.params.id),
			},
			data: {
				approval_status: "approved",
			},
		});
		res.status(200).json({ message: "Fundraiser successfully approved" });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteFundraiser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// do something
	try {
		const deleteFundraiser = await prisma.fundraiser.delete({
			where: {
				id: String(req.params.id),
			},
		});
		res.status(200).json({ message: "Fundraiser successfully deleted" });
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

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
				id: String(req.params.id),
			},
			data: req.body,
		});
		res.json(group);
	} catch (error: any) {
		res.status(500).json({ message: "Failed to update group" });
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

// Member-related functions ================================================== //
export const addGroupMember = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id, name, title, email_address, phone_number } = req.body;
		const groupFound = await prisma.group.findUnique({
			where: {
				id: String(req.params.id),
			},
			select: {
				members: true,
			},
		});

		if (!groupFound) {
			return res.status(404).json({ message: "Group not found" });
		}

		const existingMembers = groupFound?.members;

		const formattedMembers: any = existingMembers?.map((member: any) => ({
			id: member.id,
			name: member.name,
			title: member.title,
			email_address: member.email_address,
			phone_number: member.phone_number,
		}));
		const members = [
			...formattedMembers,
			{
				id: id,
				name: name,
				title: title,
				email_address: email_address,
				phone_number: phone_number,
			},
		];

		const group = await prisma.group.update({
			where: {
				id: String(req.params.id),
			},
			data: {
				members: {
					set: members.map((member) => ({ ...member })),
				},
			},
		});

		res.json(groupFound);
	} catch (error: any) {
		res.status(500).json({ message: "Failed to join group" });
	}
};

export const updateGroupMember = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id, name, title, email_address, phone_number } = req.body;
		const groupFound = await prisma.group.findUnique({
			where: {
				id: String(req.params.id),
			},
			select: {
				members: true,
			},
		});

		if (!groupFound) {
			return res.status(404).json({ message: "Group not found" });
		}

		const existingMembers = groupFound?.members as {
			id: string;
			name: string;
			title: string;
			email_address: string;
			phone_number: string;
		}[];

		const memberToUpdate = existingMembers?.find(
			(member) => member.id === id
		);

		if (!memberToUpdate) {
			return res.status(404).json({ message: "Member not found" });
		}

		memberToUpdate.name = name as string;
		memberToUpdate.title = title as string;
		memberToUpdate.email_address = email_address as string;
		memberToUpdate.phone_number = phone_number as string;

		const formattedMembers: any = existingMembers?.map((member: any) => ({
			id: member.id,
			name: member.name,
			title: member.title,
			email_address: member.email_address,
			phone_number: member.phone_number,
		}));
		const members = [
			...formattedMembers,
			{
				id: id,
				name: name,
				title: title,
				email_address: email_address,
				phone_number: phone_number,
			},
		];

		const group = await prisma.group.update({
			where: {
				id: String(req.params.id),
			},
			data: {
				members: {
					set: members.map((member) => ({ ...member })),
				},
			},
		});
	} catch (error: any) {
		res.status(500).json({ message: "Failed to update group member" });
	}
};

export const getGroupMembers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
    try {
        const groupFound = await prisma.group.findUnique({
            where: {
                id: String(req.params.id),
            },
            select: {
                members: true,
            },
        });

        if (!groupFound) {
            return res.status(404).json({ message: "Group not found" });
        }

        const existingMembers = groupFound?.members;

        const formattedMembers: any = existingMembers?.map((member: any) => ({
            id: member.id,
            name: member.name,
            title: member.title,
            email_address: member.email_address,
            phone_number: member.phone_number,
        }));

        res.json(formattedMembers);
    } catch (error: any) {
        res.status(500).json({ message: "Failed to get group members" });
    }
};

export const getGroupMember = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
    try {
        const groupFound = await prisma.group.findUnique({
            where: {
                id: String(req.params.id),
            },
            select: {
                members: true,
            },
        });

        if (!groupFound) {
            return res.status(404).json({ message: "Group not found" });
        }

        const existingMembers = groupFound?.members;

        const formattedMembers: any = existingMembers?.map((member: any) => ({
            id: member.id,
            name: member.name,
            title: member.title,
            email_address: member.email_address,
            phone_number: member.phone_number,
        }));

        res.json(formattedMembers);
    } catch (error: any) {
        res.status(500).json({ message: "Failed to get group member" });
    }
};

export const deleteGroupMember = async () => {};

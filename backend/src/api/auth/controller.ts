import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database"; 

// logger middleware
import { loggerMiddleware } from "../../middleware";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        });

        if (!user || user.password !== req.body.password) {
            loggerMiddleware(req, res, next);
            return res.status(400).json({message: "Invalid credentials"});
        }

        console.log(user);
        

        loggerMiddleware(req, res, next);

        res.status(200).json({message: "Login Successful", data: {id: user.id, email: user.email, user_type: user.user_type, status: user.status}});

    } catch (error: any) {
        loggerMiddleware(req, res, next);
        res.status(500).json({message: "Login failed"})
    }
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.create({
            data: req.body
        });

        res.status(200).json({message: "Registration Successfull", data: {id: user.id, email: user.email, user_type: user.user_type, status: user.status}});
    } catch (error: any) {
        res.status(500).json({message: "Login failed"})
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({ data: {id: user?.id, email: user?.email, user_type: user?.user_type, status: user?.status}});
        
    } catch (error: any) {
        res.status(500).json({message: "Login failed"})
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: req.body
        });

        res.status(200).json(user);
    } catch (error: any) {
        res.status(500).json({message: "Login failed"})
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({message: "User deleted successfully"});
    } catch (error: any) {
        res.status(500).json({message: "Login failed"})
    }
}

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                password: req.body.password
            }
        });

        res.status(200).json({message: "Password reset successful"});
    } catch (error: any) {
        res.status(500).json({message: "Login failed"})
    }
}
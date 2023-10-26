import { Express, Request, Response, NextFunction } from "express";
import prisma from "../../database";
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

const MailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'Programming Competition',
        link: 'https://programming-competition.vercel.app/'
    }
});

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {receipient, subject, message} = req.body;
        
        const email = {
            body: {
                name: 'Programming Competition',
                intro: 'Welcome to Programming Competition! We\'re very excited to have you on board.',
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        }

        const emailBody = MailGenerator.generate(email);

        const mailOptions = {
            from: process.env.EMAIL,
            to: receipient,
            subject: subject,
            html: emailBody
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err);
                res.status(500).json({message: err.message});
            } else {
                console.log(info);
                res.status(200).json({message: 'Email sent successfully'});
            }
        });
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
}



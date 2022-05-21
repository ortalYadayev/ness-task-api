import * as express from 'express';
import { checkSchema, validationResult } from "express-validator";
import { PrismaClient } from '@prisma/client'

const studentRouter = express.Router();

const prisma = new PrismaClient();

const SCHEMA = {
    institution: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 2, max: 255 },
            errorMessage: 'חובה להיות בין 2 ל-255 תווים'
        },
    },
    id_student: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 9, max: 9 },
            errorMessage: 'חובה להיות באורך 9 תווים!'
        },
        matches: {
            options: '[0-9]{9,9}',
            errorMessage: 'תעודת זהות מכיל רק מספרים',
        },
    },
    birthDate: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
    },
    firstName: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 2, max: 255 },
            errorMessage: 'חובה להיות בין 2 ל-255 תווים'
        },
    },
    lastName: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 2, max: 255 },
            errorMessage: 'חובה להיות בין 2 ל-255 תווים'
        },
    },
    birthCountry: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
    },
    gender: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
    },
    nation: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 2, max: 255 },
            errorMessage: 'חובה להיות בין 2 ל-255 תווים'
        },
    },
    homePhone: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 9, max: 9 },
            errorMessage: 'חובה להיות באורך 9 תווים!'
        },
    },
    mobilePhone: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isLength: {
            options: { min: 10, max: 10 },
            errorMessage: 'חובה להיות באורך 10 תווים!'
        },
    },
    email: {
        notEmpty: {
            errorMessage: "שדה חובה!"
        },
        isEmail: {
            errorMessage: "אימייל שגוי"
        },
    },
}

studentRouter.post('/api/sign',
checkSchema(SCHEMA), async (request: express.Request, response: express.Response) => {
    let errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }

    const data = request.body;

    try {
        await prisma.student.create({
            data: {
                id_student: data.idStudent,
                ...data
            }
        });
    } catch (error) {
        response.status(422).send({
            message: 'התלמיד כבר קיים במערכת!',
        });
    }

    response.status(201).send();
});

studentRouter.get('/api/students', async (request, response) => {
    const students = await prisma.student.findMany();

    response.status(200).send({ students });
});


export default studentRouter;
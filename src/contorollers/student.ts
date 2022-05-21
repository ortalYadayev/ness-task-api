import * as express from 'express';
import {body, checkSchema} from "express-validator";
import { PrismaClient } from '@prisma/client'

const matchRouter = express.Router();

/*
, checkSchema({
    idStudent: {
        isString: true,
        isLength: 9,

        errorMessage: "תעודת זהות שגויה",
    }
})

 */

matchRouter.post('/api/sign', async (request, response) => {
    const data = request.body;
    console.log(request.body)

    const prisma = new PrismaClient();

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

export default matchRouter;
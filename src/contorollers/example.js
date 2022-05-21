import express from 'express';

const matchRouter = express.Router();

matchRouter.get('/api/match', (request, response) => {
    response.send({});
});

matchRouter.post('/api/declines', (request, response) => {
    const id = request.body.params.id;

    response.send();
});

export default matchRouter;
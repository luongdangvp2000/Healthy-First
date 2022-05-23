import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Place from '../models/placeModel.js';

const placeRouter = express.Router();

placeRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const places = await Place.find({}); //return all places
        res.send(places);
    })
);

placeRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        await Place.remove({});
        const createdPlaces = await Place.insertMany(data.places);
        res.send(createdPlaces);
    })
);

placeRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const place = await Place.findById(req.params.id);
        if (place) {
            res.send(place)
        } else {
            res.status(404).send({ message: 'Place Not Found' });
        }
    })
);

export default placeRouter;
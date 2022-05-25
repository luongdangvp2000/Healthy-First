import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Place from '../models/placeModel.js';
import { isAuth, isAdmin } from '../utils.js';

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

placeRouter.post(
    '/',
    isAuth,
    isAdmin,
    //isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
        const place = new Place({
            name: 'sample name' + Date.now(),
            //seller: req.user._id,
            address: 'sample address',
            district: 'sample district',
            number: 'sample number',
            businessType: 'sample businessType',
            idCertificate: 0,
            image: 'images/Book_1.jpg',
            status: 'Ok',
            //certificate: 'sample',
        });
        const createdPlace = await place.save();
        res.send({ message: 'Place Created', place: createdPlace });
    })
);

placeRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    //isSellerOrAdmin,
    expressAsyncHandler(async (req, res) => {
        const placeId = req.params.id;
        const place = await Place.findById(placeId);
        if (place) {
            place.name = req.body.name;
            place.address = req.body.address;
            place.image = req.body.image;
            place.district = req.body.district;
            place.number = req.body.number;
            place.businessType = req.body.businessType;
            place.status = req.body.status;
            const updatedPlace = await place.save();
            res.send({ message: 'Place Updated', place: updatedPlace });
        } else {
            res.status(404).send({ message: 'Place Not Found' });
        }
    })
);

placeRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const place = await Place.findById(req.params.id);
        if (place) {
            const deletePlace = await place.remove();
            res.send({ message: 'Place Deleted', place: deletePlace });
        } else {
            res.status(404).send({ message: 'Place Not Found' });
        }
    })
);

export default placeRouter;
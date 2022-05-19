import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import dotenv from 'dotenv';

import userRouter from './routers/userRouter.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connect to db')
}).catch(err => {
    console.log(err.message)
});

app.get('/api/places/:id', (req, res) => {
    const place = data.places.find((x) => x._id === req.params.id)
    if (place) {
        res.send(place)
    } else {
        res.status(404).send({ messsage: 'Place not Found' });
    }
});

app.get('/api/places', (req, res) => {
    res.send(data.places)
})

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});



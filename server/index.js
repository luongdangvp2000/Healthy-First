import express from 'express';
import mongoose from 'mongoose';
// import data from './data.js';
import path from 'path';
import dotenv from 'dotenv';
import uploadRouter from './routers/uploadRouter.js';
import userRouter from './routers/userRouter.js';
import placeRouter from './routers/placeRouter.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();


mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('connect to db')
}).catch(err => {
    console.log(err.message)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/places/:id', (req, res) => {
//     const place = data.places.find((x) => x._id === req.params.id)
//     if (place) {
//         res.send(place)
//     } else {
//         res.status(404).send({ messsage: 'Place not Found' });
//     }
// });

// app.get('/api/places', (req, res) => {
//     res.send(data.places)
// })

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/places', placeRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});



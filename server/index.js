import express from 'express';
import data from './data.js';

const app = express()

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});



import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    district: {type: String, required: true},
    number: {type: String, required: true},
    businessType: {type: String, required: true},
    idCertificate: {type: Number, required: true},
    image: {type: String, required: true},
    status: {type: String, required: true},

},{
    timestamps: true,
})

const Place = mongoose.model('Place', placeSchema);

export default Place;
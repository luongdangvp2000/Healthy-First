import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    beginDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    nameOfPlace: {type: String, required: true},
    addressOfPlace: {type: String, required: true},
    districtOfPlace: {type: String, required: true},
    numberOfPlace: {type: String, required: true},
},{
    timestamps: true,
})

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;
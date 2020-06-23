const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CraftSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    manufacturer: {
        type: String
    },

    origin: {
        type: String
    },

    engine: {
        type: String
    },

    flights: [],

    history: {
        type: String
    },

    engineering: {
        type: String
    }
})

const Craft = mongoose.model('Craft', CraftSchema)

module.exports = Craft;
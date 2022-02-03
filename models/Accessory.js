const { Schema, model } = require('mongoose')

const asccessorySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ''},
    imageUrl: {type: String},
    price: {type: Number, min: 0},
});

const Accessory = model('Accessory', asccessorySchema);

module.exports = Accessory;
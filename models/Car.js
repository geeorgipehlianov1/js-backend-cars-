const { Schema, model, Types: {ObjectId} } = require('mongoose');

const carSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ''},
    imageUrl: {type: String},
    price: {type: Number, required: true},
    accessories: {type: [ObjectId], default: [], ref: 'Accessory'}
});

const Car = model('Car', carSchema);

module.exports = Car;
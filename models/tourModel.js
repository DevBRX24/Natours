const monggoes = require('mongoose');

const tourSchema = new monggoes.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.6
  },
  price: {
    type: Number,
    required: [true, 'A tour must have price']
  }
});

const Tour = monggoes.model('Tour', tourSchema);

module.exports = Tour;

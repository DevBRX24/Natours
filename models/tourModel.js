const monggoes = require('mongoose');

const tourSchema = new monggoes.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have name'],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, ' A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must a difficulty']
  },
  ratingsAverage: {
    type: Number,
    default: 4.6
  },
  ratingQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have price']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  image: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date]
});

const Tour = monggoes.model('Tour', tourSchema);

module.exports = Tour;

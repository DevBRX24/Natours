const monggoes = require('mongoose');

const reviewSchema = new monggoes.Schema(
  {
    review: {
      type: String,
      trim: true,
      required: [true, 'Review can not be empty']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    tour: {
      type: monggoes.Schema.ObjectId,
      ref: 'Tour',
      required: [true, ' Review must belong to a tour']
    },

    user: {
      type: monggoes.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

reviewSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'tour',
    select: 'name'
  }).populate({
    path: 'user',
    select: 'name'
  });

  next();
});

const Review = monggoes.model('Review', reviewSchema);

module.exports = Review;

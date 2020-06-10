const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndRemove(req.params.id);
    // Status Code 204 = no content

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'Deleted',
      data: doc
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    // Status Code 201 = create
    res.status(201).json({
      status: 'success',
      data: {
        doc: doc
      }
    });
  });

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id).populate('reviews');
    // Same as doc.findOne({_id: req.params.id})

    if (!doc) {
      return next(new AppError('No doc found with that ID', 404));
    }

    res.status(200).json({
      status: 'sucess',
      data: {
        doc
      }
    });
  });

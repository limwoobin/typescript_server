'use strict';

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/mongodb_tutorial');

autoIncrement.initialize(connection);

var imageSchema = new mongoose.Schema({
    width: Number,
    height: Number
});

var childCommentSchema = new mongoose.Schema({
    childCommentId: { type: Number },
    board: { type: mongoose.Schema.Types.ObjectId, ref: 'board', required: true },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'comment', required: true },
    userEmail: { type: String },
    content: { type: String },
    image: imageSchema,
    regDate: { type: Date, default: Date.now },
    modiDate: { type: Date, default: Date.now }
});

childCommentSchema.plugin(autoIncrement.plugin, {
    model: 'childComment',
    field: 'childCommentId',
    startAt: 1,
    increment: 1
});

module.exports = mongoose.model('childComment', childCommentSchema);
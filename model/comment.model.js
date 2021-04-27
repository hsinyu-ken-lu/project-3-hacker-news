const mongoose = require('mongoose');

const CommentSchema = require('../schema/comment.schema.js').CommentSchema;

const CommentModel = mongoose.model('comment', CommentSchema);

function addComment(comment){
    return CommentModel.create(comment);
}

function findCommentsByPostId(postId) {
    return CommentModel.find({postId: postId}).exec();
}

function findCommentByCommentId(commentId) {
    return CommentModel.findOne({commentId:commentId}).exec();
}

function deleteCommentByCommentId(commentId) {
    return CommentModel.findOneAndDelete({commentId:commentId}).exec();
}

function updateCommentByCommentId(commentId, updatedContent) {
    return CommentModel.findOneAndUpdate({commentId:commentId}, updatedContent);
}

function countCommentByPostID(postId) {
    const filter = {postId: postId};
    console.log(postId)
    return CommentModel.countDocuments(filter);
}

exports.findComments = findCommentsByPostId;
exports.addComment = addComment;
exports.findCommentByCommentId = findCommentByCommentId;
exports.deleteCommentByCommentId = deleteCommentByCommentId;
exports.updateCommentByCommentId = updateCommentByCommentId;
exports.countCommentByPostID = countCommentByPostID;
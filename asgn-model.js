const mongoose = require('mongoose');

const asgnSchema = mongoose.Schema({
    courseName: String,
    asgnName: {
        type: String,
        required: true,
        unique: true
    },
    dueDate: Date
});

var asgn = module.exports = mongoose.model("asgn", asgnSchema);

module.exports.get = function (callback, limit) {
    asgn.find(callback).limit(limit);
}
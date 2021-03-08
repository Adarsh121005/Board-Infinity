const mongoose = require('mongoose');


var createSchema = new mongoose.Schema({
    task: String,
    task_des: String,
    creator:String,
    timer: String,
    createdAt:Date
})


module.exports = mongoose.model('Create', createSchema);
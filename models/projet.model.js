const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    name: String,
    desc: String,
    date_start : Date,
    date_end : Date,
    total_cost : Number,
    status : String //Canceled, Finished, In Progress, Prospect
},{
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    family_name: String,
    first_name: String,
    date_of_birth : Date,
    address : {
         street : String,
         city :  String,
         zip_code: String
    },
    phone_number : String,
    email : String,
    position : String // Project Manager, Developer, Commercial, Web Designer
},{
    timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);
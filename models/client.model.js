const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
    company_name: String,
    address : {
         street : String,
         city :  String,
         zip_code: String
    },
    referent_contact : {
        first_name : String,
        family_name : String,
        phone_number : String,
        mail : String
    },
    business_sector : String
},{
    timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);
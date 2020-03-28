const mongoose = require('mongoose');

// schema
const Schema = mongoose.Schema;
//const mongoose = require('mongoose')
const blgSchema = new Schema({
    itemname: String,
    amount: Number,
    date: {
        type: String,
        default: get_date()
    },
    
});

const spentschema = new Schema({
    itemname: String,
    amount: Number,
    date: {
        type: String,
        default: get_date()
    },
    
});

// to fetch date

function get_date() {

    let  date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);
    
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    
    // current year
    let year = date_ob.getFullYear();
    
    // current hours
    let hours = date_ob.getHours();
    
    // current minutes
    let minutes = date_ob.getMinutes();
    
    // current seconds
    let seconds = date_ob.getSeconds();
    
    // prints date in YYYY-MM-DD format
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes);
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes;
};



//model
const blggdata = mongoose.model('transaction', blgSchema);
const spentdata = mongoose.model('spent', spentschema);

module.exports = blggdata;
module.exports = spentdata;
const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    Content:
    {
        type: String,
        required: true,
        max:500
    },
    Rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    Author: {
        type: String,
        required: true,
        maxlength: 500
    },
    CreatedAt: {
        type: String,
        default: Date.now()
    }
});
module.exports=mongoose.model("Customer",reviewSchema);
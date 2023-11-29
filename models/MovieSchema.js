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
const movieSchema = new mongoose.Schema({
  title: { type: String,
    required: true,
     maxlength: 255 },
  description:{ type: String,
     required: true, maxlength: 1000 },
  genre: { type: String, required: true },
  releaseYear: { type: Number, 
    required: true, min: 1800,},
  reviews: [reviewSchema],
});
module.exports = mongoose.model('Movie', movieSchema);

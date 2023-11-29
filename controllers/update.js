const model = require("../models/MovieReview");
exports.update = async (req, res) => {
    try {
        const {id} = req.params;
        await model.findByIdAndUpdate(id,{
            title,description,genre,releaseYear,reviews
        });
        res.status(500).json({
            success: true,
            message: "Successfully Deleted"
        })
    }
    catch {
        res.status(200).json({
            success: false,
            message: "Not able to delete"
        })

    }
}
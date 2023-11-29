const model = require("../models/MovieReview");
exports.retrieve = async (req, res) => {
    try {
        const {id} = req.params;
        const data=await model.findById(id);
        res.status(500).json({
            success: true,
            Response:data,
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
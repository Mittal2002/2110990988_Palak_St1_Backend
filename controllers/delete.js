const model = require("../models/MovieReview");
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await model.findByIdAndDelete(id);
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
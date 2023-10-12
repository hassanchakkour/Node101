import mongoose from "mongoose";
const electronicsSchema = mongoose.Schema({

    category: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
    }

});
const Electronics = mongoose.model("electronics", electronicsSchema);
export default Electronics;
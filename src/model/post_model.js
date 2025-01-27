import mongoose from "mongoose";
 const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

export default mongoose.model("post",postSchema);
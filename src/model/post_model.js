import mongoose from "mongoose";
 const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true , "title is required"],
        maxlength: 100
    },
    content:{
        type: String,
        required: true,

    },
    author:{
        type: String,
        required: true,
    }
    
})

export default mongoose.model("user-posts",postSchema);
import Post from "./../model/post_model.js";
export const createPost = async (req ,res) =>{
    try{
        const postData = new Post(req.body);
        const savedPost =  postData.save();
        res.status(201).json({message: "post is saved in database"});

    }catch(error){
        res.status(500).json({eroor: "Internel Server error is occured."})
    }
}
import Post from "./../model/post_model.js";
export const createPost = async (req ,res) =>{
    try{
        const postData = new Post(req.body);
        const savedPost =  postData.save();
        res.status(201).json({message: "post is saved in database"});

    }catch(error){
        res.status(500).json({eroor: "Internel Server error is occured."});
    }
};

export const getAllPosts = async (req , res) =>{
    try{
        const allPosts = await Post.find();
        if(allPosts.length == 0){
            res.status(404).json({message: "There is no post uploaded yet"});
        }
        else{
            res.status(200).json(allPosts);
        }

    }catch(error){
        res.status(500).json({error: "Internel Server is occured for getting all posts"});
    }
};
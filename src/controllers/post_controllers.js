import Post from "./../model/post_model.js";
export const createPost = async (req ,res) =>{
    try{
        const{title , content , author} = req.body;
        const newPost = new Post({title ,content, author })
        const savedPost = await  newPost.save();
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

export const updatePost = async (req , res) =>{
    try{
        const {title , content , author} = req.body;
        const post_id = req.params.id;
        const postAvailable = await Post.findOne({_id: post_id});
        if(!postAvailable){
            res.status(404).json({message : "The is no such post available."});
        }
        else{
            postAvailable.title = title ? title : postAvailable.title;
            postAvailable.content = content;
            postAvailable.author = author;
            const updatedPost = await postAvailable.save();
            res.status(201).json({message: "the post is updated.", post: updatedPost});
        }
    }catch(error){
        res.status(500).json({error: "Internel Error is occured."});
    }
}
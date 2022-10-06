
import { default as Blog, default as blog } from '../model/Blog';
export async function getAllBlog(req, res, next) {
    let blogs;
    try {
        blogs = await blog.find();
    } catch (error) {
       return console.log(error);
    }
    if (!blogs) {
        return res.status(404).json({ message: "no Blogs found" });
    }

    return res.status(200).json({ blogs });

};
export async function addBlog(req, res, next) {
 const {title,body,user,image} = req.body;


 let existingBlogs;
 try {
     existingBlogs = await Blog.findOne({ title });
 } catch (error) {
    return console.log(error);
 }
 if (existingBlogs) {
     return res.status(400).json({ message: "Blog Already exist" });
 }
 

 const blog = new Blog({
     title,body,image,user
 })
 
 try {
     await blog.save();
  } catch (error) {
     return console.log(error);
  }
  return res.status(201).json({ blog });

};
export async function updateBlog(req, res, next) {
    const {title,body} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId,{
            title,
            body
        })
    } catch (error) {
        return console.log(error);
    }
    if(!blog){
        return res.status(500).json({ message: "Blog Unable to update" });
    }
    return res.status(200).json({ blog });
}
export async function getBlog(req, res, next) {
    const {title,body} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findById(blogId);
    } catch (error) {
        return console.log(error);
    }
    if(!blog){
        return res.status(500).json({ message: "Blog Unable view" });
    }
    return res.status(200).json({ blog });
}
export async function deleteBlog(req, res, next) {
    const {title,body} = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(blogId);
    } catch (error) {
        return console.log(error);
    }
    if(!blog){
        return res.status(500).json({ message: "Blog Unable Delete" });
    }
    return res.status(200).json({ message: "Successfully Deleted"  });
}
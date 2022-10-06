import mongoose from 'mongoose';

const BlogSchema = mongoose.Schema(
  {
    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        unique:true,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    user: {
      type:String,
      required:true
  },
  }

);

export default mongoose.model('Blog', BlogSchema);

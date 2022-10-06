import express from 'express';
import { addBlog, deleteBlog, getAllBlog, getBlog, updateBlog } from "../controller/blog-controller";


const router = express.Router();
router.get('/', getAllBlog);
router.get('/:id', getBlog);
 router.post('/add', addBlog);
 router.put('/update/:id', updateBlog);
 router.delete('/delete/:id', deleteBlog);

// router.post('/login', logIn);

export default router;
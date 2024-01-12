import express from 'express';
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware';
import CreateCategory from '../client/src/pages/Admin/CreateCategory';
import { createCategoryController } from './../controllers/categoryController';

var router = express.Router();

//routes
router.post('/create-category', requireSignIn,isAdmin,createCategoryController) 



export default router
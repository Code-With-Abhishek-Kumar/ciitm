import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import upload from '../utils/multerUtils.js';
import {
  delete_FormData,
  get_FormData,
  view_FormData,
} from '../controllers/contactForm.controller.js'; // c stand Form Contact
import { admin_DashBoard_Controller } from '../controllers/adminDashboard.controller.js';
import {
  createAlbum,
  getAlbum,
  CreateImage,
} from '../controllers/album.controller.js';

// MiddleWare
import Login_Middleware from '../middleware/Login_middleware.js';

router.get('/', Login_Middleware, function (req, res) {
  res.render('Admin/adminDashboard');
});

router.get('/contact/Inbox', Login_Middleware, (req, res) => {
  res.render('Admin/contactAdmin');
});

router.get('/albums', Login_Middleware, (req, res) => {
  res.render('Admin/AlbumCreate');
});

// router.get(
//   '/create/albums',
//   // Login_Middleware,
//   upload.single('albumImage'),
//   createAlbum
// );

import contactSchema from '../models/contact.model.js';
import { Mongoose } from 'mongoose';

router.get('/contact/Inbox/message', Login_Middleware, get_FormData);

router.delete(
  '/contact/Inbox/message/delete/:id',
  Login_Middleware,
  delete_FormData
);

router.get('/album', Login_Middleware, getAlbum);

router.post(
  '/create/albums',
  // Login_Middleware,
  upload.single('albumImage'),
  createAlbum
);

router.post('/create/image', upload.single('imageFile'), CreateImage);

//localhost:3000/admin/contact/Inbox/message/view/66d473108638006327ea99e0

router.get('/contact/Inbox/message/view/:id', Login_Middleware, view_FormData);

// handle When Error

export default router;

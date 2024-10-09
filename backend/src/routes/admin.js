import express from 'express';
const router = express.Router();
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import upload from '../utils/multerUtils.js';
import {
  delete_FormData,
  get_FormData,
  view_FormData,
} from '../controllers/contactForm.controller.js'; // c stand Form Contact

import {
  createAlbum,
  getAlbum,
  CreateImage,
  deleteAlbum,
  deleteImage,
} from '../controllers/album.controller.js';

// MiddleWare
import Login_Middleware from '../middleware/Login_middleware.js';

router.get('/', Login_Middleware, function (req, res) {
  res.render('Admin/adminDashboard');
});

/* -------------------------------------------------------------------------- */
/*        handles routes related to the Contact Us feature                   */
/* -------------------------------------------------------------------------- */

router.get('/contact/Inbox', Login_Middleware, (req, res) => {
  res.render('Admin/contactAdmin');
});

router.get('/contact/Inbox/message', Login_Middleware, get_FormData);
router.get('/contact/Inbox/message/view/:id', Login_Middleware, view_FormData);

router.delete(
  '/contact/Inbox/message/delete/:id',
  // Login_Middleware,
  delete_FormData
);

/* -------------------------------------------------------------------------- */
/*     Handles routes related to  Album and Image                            */
/* -------------------------------------------------------------------------- */

router.get('/albums', Login_Middleware, (req, res) => {
  res.render('Admin/AlbumCreate');
});

router.get('/album', Login_Middleware, getAlbum);
router.post(
  '/create/albums',
  // Login_Middleware,
  upload.single('albumImage'),
  createAlbum
);
router.delete('/delete/albums/:id', deleteAlbum);
router.delete('/delete/image/:id', deleteImage);
router.post('/create/image', upload.single('imageFile'), CreateImage);

export default router;

import express from 'express';
const router = express.Router();

// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import upload from '../utils/multerUtils.js';

import { SendMail } from '../controllers/sendMail.controller.js';

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

// s%3Anf3nddH4PQ-FiueJtj4jnuj4tvdZr1fe.JH51VVI6ktloxhkGc053p08vtC8F0jpU4vU9toj7y2c

router.get('/', function (req, res) {
  res.render('Admin/adminDashboard');
});

router.post('/sendMail', SendMail);

/* -------------------------------------------------------------------------- */
/*        handles routes related to the Contact Us feature                   */
/* -------------------------------------------------------------------------- */

router.get('/contact/Inbox', (req, res) => {
  res.render('Admin/contactAdmin');
});

router.get('/contact/Inbox/message', get_FormData);
router.get('/contact/Inbox/message/view/:id', view_FormData);

router.delete(
  '/contact/Inbox/message/delete/:id',
  //
  delete_FormData
);

/* -------------------------------------------------------------------------- */
/*     Handles routes related to  Album and Image                            */
/* -------------------------------------------------------------------------- */

router.get('/albums', (req, res) => {
  res.render('Admin/AlbumCreate');
});

router.get('/album', getAlbum);
router.post(
  '/create/albums',

  upload.single('albumImage'),
  createAlbum
);
router.delete('/delete/albums/:id', deleteAlbum);
router.delete('/delete/image/:id', deleteImage);
router.post('/create/image', upload.single('imageFile'), CreateImage);

export default router;

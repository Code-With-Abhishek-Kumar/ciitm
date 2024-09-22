import express from 'express';
const router = express.Router();
import upload from '../utils/multerUtils.js';
import {
  delete_FormData,
  get_FormData,
  view_FormData,
} from '../controllers/contactForm.controller.js'; // c stand Form Contact
import { createAlbum, getAlbum } from '../controllers/album.controller.js';
// Define your routes here
router.get('/', (req, res) => {
  // res.send('admin Hero Page');
  res.render('Admin/adminDashboard');
});

router.get('/contact/Inbox', (req, res) => {
  res.render('Admin/contactAdmin');
});

router.get('/albums', (req, res) => {
  res.render('Admin/AlbumCreate');
});

router.post('/create/albums', upload.single('albumImage'), createAlbum);

import contactSchema from '../models/contact.model.js';
import { Mongoose } from 'mongoose';

router.get('/contact/Inbox/message', get_FormData);
router.delete('/contact/Inbox/message/delete/:id', delete_FormData);

//localhost:3000/admin/contact/Inbox/message/view/66d473108638006327ea99e0

http: router.get('/contact/Inbox/message/view/:id', view_FormData);

// handle When Error

export default router;

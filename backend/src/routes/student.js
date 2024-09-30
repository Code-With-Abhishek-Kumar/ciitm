import express from 'express';
const router = express.Router();

import {
  Handle_newStudent_Record,
  Handle_StudentDocument_Upload,
  Handle_StudentFee_Paid,
} from '../controllers/StudentAdmission.controller.js';

// MiddleWare
import Login_Middleware from '../middleware/Login_middleware.js';

router.get('/', (req, res) => {
  res.send('Student Hero Page');
});

router.post('/admission/Personal', Login_Middleware, Handle_newStudent_Record);

router.get('/register', Login_Middleware, (req, res) => {
  res.send('Student upload');
});

router.get('/upload', Login_Middleware, (req, res) => {
  res.send('Student upload');
});

router.get('/fee', Login_Middleware, (req, res) => {
  res.send('Student fee Page');
});

export default router;

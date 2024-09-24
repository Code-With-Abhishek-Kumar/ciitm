import express from 'express';
const router = express.Router();

import {
  Handle_newStudent_Record,
  Handle_StudentDocument_Upload,
  Handle_StudentFee_Paid,
} from '../controllers/StudentAdmission.controller.js';

// Define your routes here
router.get('/', (req, res) => {
  res.send('Student Hero Page');
});

router.post('/admission/Personal', Handle_newStudent_Record);

router.get('/register', (req, res) => {
  res.send('Student upload');
});

router.get('/upload', (req, res) => {
  res.send('Student upload');
});

router.get('/fee', (req, res) => {
  res.send('Student fee Page');
});

export default router;

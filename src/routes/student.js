import express from 'express';
const router = express.Router();

import {
  StudentPersonal_Detail,
  StudentDocument_Upload,
  StudentFee_Paid,
} from '../controllers/StudentAdmission.controller.js';

// Define your routes here
router.get('/', (req, res) => {
  res.send('Student Hero Page');
});

router.post('/Personal', StudentPersonal_Detail);

router.get('/upload', (req, res) => {
  res.send('Student upload');
});

router.get('/fee', (req, res) => {
  res.send('Student fee Page');
});

export default router;

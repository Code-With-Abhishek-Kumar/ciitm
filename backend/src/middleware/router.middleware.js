import express from 'express';
const app = express();
import Login_Middleware from './Login_middleware.js';

import indexRouter from '../routes/index.js';
import studentRouter from '../routes/student.js';
import adminRouter from '../routes/admin.js';
// Login_Middleware
app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);

export default app;

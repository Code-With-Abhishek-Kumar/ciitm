import express from "express";
const app = express();

import indexRouter from "../routes/index.js";
import studentRouter from "../routes/student.js";
import adminRouter from "../routes/admin.js";

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/student", studentRouter);

export default app;

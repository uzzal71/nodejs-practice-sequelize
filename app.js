import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();

// Use packages
app.use(bodyParser.json());

export default app;
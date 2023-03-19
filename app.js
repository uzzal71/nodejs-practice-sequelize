import express from "express";
import bodyParser from "body-parser";

const app = express();

// Use packages
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "Nodejs sequelize!"
    });
});

// Server
app.listen(3000, (req, res) => {
    console.log(`Server is running on http://localhost:${3000}`);
});
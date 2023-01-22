const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());

app.post("/file", upload.single("file"), async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    console.log("ok");
    res.status(200).send("ok");
});

app.listen(8000, () => console.log("Server started..."));


const express = require("express");


const InitiateMongoServer = require("./config/db");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const postRoute = require('./routes/posts');
const cors = require("cors");

InitiateMongoServer();
const app = express();

app.use(
    cors({
        origin: "*",
    })
);


app.use()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});
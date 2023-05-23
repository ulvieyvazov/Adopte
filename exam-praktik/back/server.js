const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const BloggersSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    caption: {
      type: String,
      require: true,
    },
    liks: {
      type: Number,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Blogger = mongoose.model("bloggers", BloggersSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/bloggers", async (req, res) => {
  try {
    const get = await Blogger.find({});
    res.send(get);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/bloggers/:id", async (req, res) => {
  try {
    const getId = req.params.id;
    const getBloggerId = await Blogger.findById(getId);
    res.send(getBloggerId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/bloggers", (req, res) => {
  const getBody = req.body;
  const post = new Blogger(getBody);
  post.save();
  res.send(post);
});

app.delete("/bloggers/:id", async (req, res) => {
  try {
    const deletBody = req.params.id;
    const delet = await Blogger.findByIdAndDelete(deletBody);
    res.send(delet);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server ${PORT} portunda qalxdi`);
});

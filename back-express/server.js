const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const DB = process.env.DB_URL;

mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;

const ChildsSchema = new Schema(
  {
    img: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Child = mongoose.model("childs", ChildsSchema);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/childs", async (req, res) => {
  try {
    const get = await Child.find({});
    res.send(get);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/childs/:id", async (req, res) => {
  try {
    const getId = req.params.id
    const getToyId = await Child.findById(getId);
    res.send(getToyId);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

app.post("/childs", (req, res) => {
  const getBody = req.body;
  const postToy = new Child(getBody);
  postToy.save();
  res.send(postToy);
});

app.delete("/childs/:id", async (req, res) => {
  try {
    const deletBody = req.params.id;
    const deletToy = await Child.findByIdAndDelete(deletBody);
    res.send(deletToy);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server ${PORT} portunda qalxdi`);
});


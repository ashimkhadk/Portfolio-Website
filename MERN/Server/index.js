const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const ExperienceModel = require("./models/Experience");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Ashim:ashim123@cluster1.zdus0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const organization = req.body.organization;
  const role = req.body.role;
  const duration = req.body.duration;

  const Experience = new ExperienceModel({
    organization: organization,
    role: role,
    duration: duration,
  });
  try {
    await Experience.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.put("/update", async (req, res) => {
  const newOrganization = req.body.newOrganization;
  const newRole = req.body.newRole;
  const id = req.body.id;

  try {
    await ExperienceModel.findById(id, (err, updatedExperience) => {
      updatedExperience.organization = newOrganization;
      updatedExperience.role = newRole;
      updatedExperience.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  ExperienceModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await ExperienceModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("Server runninng on port 3001...");
});

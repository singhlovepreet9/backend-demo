import mongoose from "mongoose";
import express from "express";
import Intern from "../models/interns";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("adding user");

  const intern = new Intern({ eId: req.body.id, name: req.body.name });
  await intern.save();
  console.log("added")
  res.status(200).send(intern);


})

export const addUser = router;

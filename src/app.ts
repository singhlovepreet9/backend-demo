import express from "express";
import mongoose from "mongoose";
import { addUser } from "../routes/addUser";
import { authentication } from "../middlewares/authentication";
import cluster from "cluster";

mongoose.connect("mongodb://localhost/testdb", { useNewUrlParser: true }).then(() => console.log("connect to db")).catch(error => console.log("error", error));
const app = express();


const ff = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("request");
      resolve();
    }, 3000);
  })
}

app.use(express.json());
app.use(authentication);
app.post("/", async (req, res) => {
  console.log("in route", req.body.id, JSON.stringify(cluster));
  await ff();
  console.log("completed", req.body.id)


});

app.use("/addUser", addUser)

app.listen(3000, () => console.log("Listening to port"));
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InternSchema = new Schema({
  eId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Intern = mongoose.model("Intern", InternSchema);

export default Intern;
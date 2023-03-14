import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

const Podcastwe = models.Podcastwe || model("Podcastwe", testSchema);

export default Podcastwe;

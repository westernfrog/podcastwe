import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://westernfrog:Pottyboy%407483@users.r7xott4.mongodb.net/podcastwe";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error(`Failed to connect to database: ${error}`);
  }
};

export default connectToDatabase;

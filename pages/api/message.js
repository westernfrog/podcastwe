import connectToDatabase from "@/utils/dbConnect";
import Podcastwe from "@/model/response";

export default async function addMessage(req, res) {
  try {
    await connectToDatabase();
    console.log("CONNECTED TO MONGO");

    const value = await Podcastwe.create(req.body);

    res.json({ value });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

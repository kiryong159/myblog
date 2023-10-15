import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function visitApi(req, res) {
  const db = (await connectDB).db("blog");
  let TodayUpadate = db.collection("visit").updateOne(
    { _id: new ObjectId("652a0ca7b7ad404412898ce5") },
    {
      $inc: { today: 1 },
    }
  );
  let TotalUpdate = db.collection("visit").updateOne(
    { _id: new ObjectId("652a0cb9b7ad404412898ce6") },
    {
      $inc: { total: 1 },
    }
  );
  return res.status(200);
}

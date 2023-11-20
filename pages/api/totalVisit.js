import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// DB Total 방문자수 업데이트

export default async function visitTotalApi(req, res) {
  const db = (await connectDB).db("blog");
  try {
    let TotalUpdate = db.collection("visit").updateOne(
      { _id: new ObjectId("652a0cb9b7ad404412898ce6") },
      {
        $inc: { total: 1 },
      }
    );
    return res.status(200).json("ok");
  } catch {
    return res.status(500).json("error");
  }
}

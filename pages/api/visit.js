import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// DB 방문자수 업데이트

export default async function visitApi(req, res) {
  const db = (await connectDB).db("blog");
  try {
    let TodayUpadate = db.collection("visit").updateOne(
      { _id: new ObjectId("652a0ca7b7ad404412898ce5") },
      {
        $inc: { today: 1 },
      }
    );
    return res.status(200).json("ok");
  } catch {
    return res.status(500).json("error");
  }
}

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function CommentDelHandler(req, res) {
  const db = (await connectDB).db("blog");
  if (req.method === "POST") {
    let result = await db
      .collection("comment")
      .deleteOne({ _id: new ObjectId(req.body) });
  } else {
    //method !== "post"
    res.status(500).json("no");
  }
  return res.status(200).json("ok");
}

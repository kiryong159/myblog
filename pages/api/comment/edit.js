import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function CommentEditHendler(req, res) {
  req.body = JSON.parse(req.body);
  const db = (await connectDB).db("blog");

  if (req.method === "POST") {
    let result = await db.collection("comment").updateOne(
      { _id: new ObjectId(req.body.commentId) },
      {
        $set: { comment: req.body.comment },
      }
    );
  } else {
    return res.status(500).json("no");
  }

  return res.status(200).json("ok");
}

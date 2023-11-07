import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// 좋아요 DB 처리
export default async function HandleLike(req, res) {
  req.body = JSON.parse(req.body);

  const value = req.body.value;

  const db = (await connectDB).db("blog");

  if (value) {
    console.log("true 일때.");
    let result = await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(req.body.postId) },
        { $inc: { like: +1 } }
      );
    return res.status(200).json("ok");
  } else {
    console.log("false 일때.");
    let result = await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(req.body.postId) },
        { $inc: { like: -1 } }
      );
    return res.status(200).json("ok");
  }
}

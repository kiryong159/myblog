import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function postEdit(req, res) {
  req.body = JSON.parse(req.body);
  const db = await connectDB();

  if (req.method === "POST") {
    let editPost = await db.collection("post").updateOne(
      { _id: new ObjectId(req.body.postId) },
      {
        $set: {
          title: req.body.title,
          category: req.body.category,
          content: req.body.content,
        },
      }
    );
  } else {
    //method가 post가 아닐시
    return res.status(500);
  }
  return res.status(200).json("ok");
}

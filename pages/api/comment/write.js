import { connectDB } from "@/util/database";

export default async function CommentWriteHandler(req, res) {
  req.body = JSON.parse(req.body);
  if (req.body.comment === "") return res.status(500).json("no");
  const db = await connectDB();
  if (req.method === "POST") {
    let result = await db.collection("comment").insertOne({
      author: req.body.author,
      authorEmail: req.body.authorEmail,
      comment: req.body.comment,
      parentId: req.body.parentId,

      commentAt: req.body.commentAt,
    });
  } else {
    //method !== post
  }

  return res.status(200).json("ok");
}

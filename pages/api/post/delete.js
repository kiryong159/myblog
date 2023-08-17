import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function PostDeleteHandler(req, res) {
  const postId = req.body;
  const db = (await connectDB).db("blog");
  if (req.method === "POST") {
    let postDelete = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(postId) });
    let commentDelete = await db
      .collection("comment")
      .deleteMany({ parentId: postId });
  } else {
    //method !== "POST"
  }
  //일반적으로 끝났을시 코드
  return res.status(200).json("ok");
}

// 글 삭제시 주인확인 ~

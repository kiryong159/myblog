import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { s3DeleteHandler } from "./s3Delete";

export default async function PostDeleteHandler(req, res) {
  const postId = req.body;
  const db = (await connectDB).db("blog");
  const postData = await db
    .collection("post")
    .findOne({ _id: new ObjectId(postId) });
  console.log("포스트데이터", postData.awsFileName);

  if (req.method === "POST") {
    let postDelete = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(postId) });
    let commentDelete = await db
      .collection("comment")
      .deleteMany({ parentId: postId });
    if (postData.awsFileName.length !== 0) {
      console.log("0이아님");
      let awsImgDelete = await postData.awsFileName.map((item) =>
        s3DeleteHandler(item)
      );
    } else {
      console.log("0임");
    }
  } else {
    //method !== "POST"
  }

  //일반적으로 끝났을시 코드
  return res.status(200).json("ok");
}

// 글 삭제시 주인확인 ~

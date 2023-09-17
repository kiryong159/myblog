import { connectDB } from "@/util/database";

// 글쓰기 api
export default async function Writehandler(req, res) {
  req.body = JSON.parse(req.body);
  const db = await connectDB();
  if (req.method === "POST") {
    const result = await db.collection("post").insertOne({
      category: req.body.category,
      title: req.body.title,
      content: req.body.content,
      postAt: req.body.postAt,
      awsFileName: req.body.awsFileName,
    });
  } else {
    //method가 post가 아닐시
    return res.status(500).json("no");
  }
  //그냥 일반적인 종료시
  return res.status(200).json("ok");
}

import { connectDB } from "@/util/database";

export default async function SearchHandler(req, res) {
  const keyword = req.body;
  const db = (await connectDB).db("blog");

  if (req.method === "POST") {
    const regexKeyword = new RegExp(keyword, "i");
    // "i" 플래그는 대소문자를 구분하지 않음을 의미
    let titleSearch = await db
      .collection("post")
      .find({ title: { $regex: regexKeyword } })
      .toArray();
    let contentSearch = await db
      .collection("post")
      .find({ content: { $regex: regexKeyword } })
      .toArray();
    console.log("검색결과", titleSearch, contentSearch);
    return res.status(200).json({ titleSearch, contentSearch });
  } else {
    return res.status(500).json("no");
  }
}

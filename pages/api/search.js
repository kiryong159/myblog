import { connectDB } from "@/util/database";

export default async function SearchHandler(req, res) {
  const keyword = req.body;
  const db = await connectDB();

  if (req.method === "POST") {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regexKeyword = new RegExp(escapedKeyword, "i");
    // "i" 플래그는 대소문자를 구분하지 않음을 의미
    let titleSearch = await db
      .collection("post")
      .find({ title: { $regex: regexKeyword } })
      .toArray();
    let contentSearch = await db
      .collection("post")
      .find({ content: { $regex: regexKeyword } })
      .toArray();
    return res.status(200).json({ titleSearch, contentSearch });
  } else {
    return res.status(500).json("no");
  }
}

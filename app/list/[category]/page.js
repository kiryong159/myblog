import { connectDB } from "@/util/database";

import ListMap from "./listmap";

// 글 목록 보이는 페이지
export default async function CategoryPage(prop) {
  const category = prop.params.category;
  const db = (await connectDB).db("blog");
  let result = null;
  if (category === "All") {
    result = await db.collection("post").find().toArray();
    result = result.map((item) => {
      item._id = item._id.toString();
      return item;
    });

    result = result.reverse();
  } else {
    result = await db.collection("post").find({ category: category }).toArray();
    result = result.map((item) => {
      item._id = item._id.toString();
      return item;
    });
    result = result.reverse();
  }
  return (
    <div className="p-5 space-y-3 h-[670px]">
      <h1 className="p-3 text-center font-bold text-2xl">{category}</h1>
      <ListMap result={result} />
    </div>
  );
}

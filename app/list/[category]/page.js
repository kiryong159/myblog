import { connectDB } from "@/util/database";
import formattedDate from "@/util/formatDate";
import Link from "next/link";

// 글 목록 보이는 페이지
export default async function CategoryPage(prop) {
  const category = prop.params.category;
  const db = (await connectDB).db("blog");
  let result = null;
  if (category === "All") {
    result = await db.collection("post").find().toArray();
    result = result.reverse();
  } else {
    result = await db.collection("post").find({ category: category }).toArray();
    result = result.reverse();
  }

  return (
    <div className="p-5 space-y-3">
      <h1 className="p-3 text-center font-bold text-2xl">{category}</h1>
      {result.map((item) => (
        <div
          key={item._id}
          className="flex justify-between font-bold bg-white w-full rounded-md p-3 hover:bg-gray-200 hover:text-purple-500 transition-all"
        >
          <Link className="w-3/4" href={`/list/${item.category}/${item._id}`}>
            {item.title}
          </Link>
          <span className="text-gray-500 text-xs w-1/4 flex justify-end">
            {formattedDate(item.postAt.toString())}
          </span>
        </div>
      ))}
    </div>
  );
}

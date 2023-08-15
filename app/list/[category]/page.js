import { connectDB } from "@/util/database";
import formattedDate from "@/util/formatDate";
import Link from "next/link";
export default async function CategoryPage(prop) {
  const category = prop.params.category;
  console.log(category);
  const db = (await connectDB).db("blog");
  let result = null;
  if (category === "All") {
    result = await db.collection("post").find().toArray();
  } else {
    result = await db.collection("post").find({ category: category }).toArray();
  }

  return (
    <div className="p-5 space-y-3">
      <h1 className="p-3 text-center font-bold text-2xl">{category}</h1>
      {result.map((item) => (
        <div
          key={item._id}
          className="flex justify-between font-bold bg-white w-full rounded-md p-3 hover:bg-gray-200 hover:text-purple-500 transition-all"
        >
          <Link href={`/list/${item.category}/${item._id}`}>{item.title}</Link>
          <span className="text-gray-500 text-xs">
            {formattedDate(item.postAt.toString())}
          </span>
        </div>
      ))}
    </div>
  );
}

//카테고리에 따른 글을 보여줘야함

//all은 모든 글을 보여줌

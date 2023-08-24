import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Category() {
  const db = (await connectDB).db("blog");
  const result = await db.collection("category").find().toArray();
  /*   console.log(result); */
  const allCount = await db.collection("post").find().toArray();

  return (
    <div className="p-3 ">
      <details className="flex flex-col space-y-3 px-1">
        <summary>Category</summary>
        {result.map(async (item) => {
          item._id = item._id.toString();
          const postCount = await db
            .collection("post")
            .find({ category: item.category })
            .toArray();

          return (
            <Link
              href={{
                pathname: `/list/${item.category}`,
              }}
              className="px-5"
              key={item._id}
            >
              {item.category} (
              {item.category === "All" ? allCount.length : postCount.length})
            </Link>
          );
        })}
      </details>
    </div>
  );
}

//post에서 category를 find (category : item.category) 해서 .length

import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Category() {
  const db = (await connectDB).db("blog");
  const categories = await db.collection("category").find().toArray();
  const result = await db.collection("category").find().toArray();
  /*   console.log(result); */
  const allCount = await db.collection("post").find().toArray();

  const postCounts = await Promise.all(
    categories.map(async (category) => {
      const count = await db
        .collection("post")
        .find({ category: category.category })
        .count();
      return { [category.category]: count };
    })
  );

  return (
    <div className="mt-5 grid grid-cols-2 p-3 gap-3 rounded-md ">
      {result.map((item) => {
        item._id = item._id.toString();
        return (
          <Link
            href={{
              pathname: `/list/${item.category}`,
            }}
            className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all "
            key={item._id}
          >
            {item.category} (
            {postCounts.find((obj) => obj[item.category] !== undefined)
              ? item.category === "All"
                ? allCount.length
                : postCounts.find((obj) => obj[item.category])[item.category]
              : //리턴값이  { "NextJS": 11 } 이라서 [item.category] 한번더해줌
                null}
            )
          </Link>
        );
      })}
    </div>
  );
}

//post에서 category를 find (category : item.category) 해서 .length

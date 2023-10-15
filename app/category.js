import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Category({ isDark }) {
  const db = (await connectDB).db("blog");
  const categories = await db.collection("category").find().toArray();
  const result = await db.collection("category").find().toArray();
  const allCount = await db.collection("post").find().toArray();
  const postCounts = await Promise.all(
    categories.map(async (item) => {
      let a = await db
        .collection("post")
        .countDocuments({ category: item.category });
      return { [item.category]: a };
    })
  );
  return (
    <div className="mt-5 grid text-center xl:grid-cols-2 p-3 gap-3 rounded-md">
      {result?.map((item) => {
        item._id = item._id.toString();
        return (
          <Link
            href={{
              pathname: `/list/${item.category}`,
            }}
            className="px-1 py-1 w-full whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all "
            key={item._id}
          >
            {item.category} (
            {postCounts.find((obj) => obj[item.category] !== undefined)
              ? item.category === "All"
                ? allCount.length
                : postCounts.find((obj) => obj[item.category]) === undefined
                ? 0
                : postCounts.find((obj) => obj[item.category])[item.category]
              : //리턴값이  { "NextJS": 11 } 이라서 [item.category] 한번더해줌 + {React: 0}이면 obj[item.category] 부분에서 undefined 뜸
                null}
            )
          </Link>
        );
      })}
    </div>
  );
}

//post에서 category를 find (category : item.category) 해서 .length

import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Category() {
  const db = (await connectDB).db("blog");
  const result = await db.collection("category").find().toArray();
  /*   console.log(result); */
  return (
    <div className="p-3">
      <details className="flex flex-col space-y-2 px-1">
        <summary>Category(all은삭제금지(갯수))</summary>
        {result.map((item) => {
          item._id = item._id.toString();
          return (
            <Link
              href={{
                pathname: `/list/${item.category}`,
                query: { categoryId: item._id },
              }}
              className="px-5"
              key={item._id}
            >
              {item.category}
            </Link>
          );
        })}
      </details>
    </div>
  );
}

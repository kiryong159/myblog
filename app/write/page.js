import { connectDB } from "@/util/database";
import WriteForm from "./writeForm";

//글쓰기 페이지
export default async function WritePost() {
  const db = (await connectDB).db("blog");
  let category = await db.collection("category").find().toArray();
  category = category.map((item) => item.category);
  const categoryList = category.slice(1);

  return (
    <div className="p-3">
      <WriteForm category={categoryList} />
    </div>
  );
}

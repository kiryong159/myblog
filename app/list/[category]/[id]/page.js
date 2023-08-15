import { connectDB } from "@/util/database";
import formattedDate from "@/util/formatDate";
import { ObjectId } from "mongodb";
import Backbtn from "./backBtn";

export default async function PostDetail(prop) {
  const postId = prop.params.id;
  console.log(prop.params.id);
  const db = (await connectDB).db("blog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(postId) });
  console.log(result);

  return (
    <div className="flex flex-col p-5 space-y-3">
      <div className="flex justify-between items-center">
        <Backbtn />
        <div className="flex justify-end space-x-3">
          <span>{result.category} </span>
          <span>{formattedDate(result.postAt.toString())}</span>
        </div>
      </div>
      <h1 className="p-3 text-center font-bold text-2xl">{result.title}</h1>
      <div className="p-3 flex">{result.content}</div>
    </div>
  );
}

//댓글
//삭제 / 수정

import { connectDB } from "@/util/database";
import formattedDate from "@/util/formatDate";
import { ObjectId } from "mongodb";
import Backbtn from "./backBtn";
import PostEdit from "./Edit";

// 글 내용 보는 페이지
export default async function PostDetail(prop) {
  const postId = prop.params.id;
  const db = (await connectDB).db("blog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(postId) });
  result._id = result._id.toString();

  let category = await db.collection("category").find().toArray();
  category = category.map((obj) => {
    return obj.category;
  });
  return (
    <div className="flex flex-col p-5 space-y-3">
      <div className="flex justify-between items-center">
        <Backbtn />
        <div className="flex justify-end space-x-3 items-center">
          <PostEdit result={result} category={category} />
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

//세션 있으면 수정 삭제 보이기
//삭제
//이미지 여러개 관리 어떻게?

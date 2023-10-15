import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import formattedDate from "@/util/formatDate";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Backbtn from "./backBtn";
import Comment from "./Comment";
import PostDeleteBtn from "./Delete";
import PostEdit from "./Edit";
import { cookies } from "next/headers";
import ViewContents from "./ViewContents";

// 글 내용 보는 페이지
export default async function PostDetail(prop) {
  const postId = prop.params.id;
  const db = (await connectDB).db("blog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(postId) });
  result ? (result._id = result._id.toString()) : null;

  let category = await db.collection("category").find().toArray();
  category = category.map((obj) => {
    return obj.category;
  });

  let session = await getServerSession(authOptions);
  let admin = session
    ? session.user.name === "박기룡" || session.user.name === "kiryong"
    : false;

  let cookie = cookies().get("isDark");
  const isDark =
    cookie !== undefined ? (cookie.value === "true" ? true : false) : false;

  if (result === null) {
    return (
      <div
        className={`p-3 flex flex-col justify-center items-center h-96 ${
          isDark ? "text-white" : " text-black"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h1 className="text-3xl">찾을수 없는 페이지 입니다.</h1>
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-col p-5 space-y-3 ${isDark ? "text-white" : ""}`}
      >
        <div className="flex justify-between items-center">
          <Backbtn />
          <div className="flex justify-end space-x-3 items-center">
            {admin ? (
              <>
                <PostEdit result={result} category={category} isDark={isDark} />
                <PostDeleteBtn postId={postId} />
              </>
            ) : null}
            <span>{result.category} </span>
            <span>{formattedDate(result.postAt.toString())}</span>
          </div>
        </div>
        <h1 className="p-3 text-center font-bold text-2xl">{result.title}</h1>
        <div className="p-3 flex">
          <ViewContents content={result.content} />
        </div>
        <Comment postId={postId} isDark={isDark} />
      </div>
    );
  }
}

//댓글

//세션 있으면 수정 삭제 보이기
//삭제
//이미지 여러개 관리 어떻게?

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import CommentBox from "./CommentBox";
import CommentWrite from "./CommentWrite";

//댓글  작성 및 불러오는 곳
export default async function Comment({ postId, isDark }) {
  const db = (await connectDB).db("blog");
  let commentList = await db
    .collection("comment")
    .find({ parentId: postId })
    .toArray();
  commentList = commentList.map((item) => {
    item._id = item._id.toString();
    return item;
  });
  let session = await getServerSession(authOptions);
  let sessionEmail = session ? session.user.email : null;

  return (
    <div
      className={`flex flex-col bg-gray-100 w-full p-3 rounded-md space-y-3  shadow-inner ${
        isDark ? "text-black" : ""
      }`}
    >
      {session ? (
        /* 댓글 작성 창 */
        <CommentWrite
          postId={postId}
          author={session.user.name}
          email={session.user.email}
        />
      ) : (
        <div className="grid grid-rows-2 3sm:flex  p-2 text-center justify-center items-center font-bold">
          <span>로그인 한 유저만 </span>
          <span>댓글 작성이 가능합니다.</span>
        </div>
      )}

      {commentList.length === 0 ? (
        <div className="p-2 text-center font-bold">작성된 댓글이 없습니다.</div>
      ) : (
        <div className="max-h-80 commentScrollBar space-y-3 min-h-[100px]">
          {/* 댓글 보여주는 창 */}
          {commentList.map((item) => (
            <CommentBox
              key={item._id}
              item={item}
              author={sessionEmail === item.authorEmail ? true : false}
              isDark={isDark}
            />
          ))}
        </div>
      )}
    </div>
  );
}

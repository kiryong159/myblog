import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import CommentBox from "./CommentBox";
import CommentWrite from "./CommentWrite";

//댓글  작성 및 불러오는 곳
export default async function Comment({ postId }) {
  const db = (await connectDB).db("blog");
  let commentList = await db
    .collection("comment")
    .find({ parentId: postId })
    .toArray();
  commentList._id = commentList.map((item) => {
    item._id = item._id.toString();
    return item;
  });

  let session = await getServerSession(authOptions);
  let sessionEmail = session ? session.user.email : null;

  return (
    <div className="flex flex-col bg-gray-100 w-full p-3 rounded-md space-y-3 ">
      {session ? (
        <CommentWrite
          postId={postId}
          author={session.user.name}
          email={session.user.email}
        />
      ) : (
        <div className="p-2 text-center font-bold">
          로그인 한 유저만 댓글 작성이 가능합니다.
        </div>
      )}

      {commentList.length === 0 ? (
        <div className="p-2 text-center font-bold">작성된 댓글이 없습니다.</div>
      ) : (
        <div className="max-h-80 commentScrollBar space-y-3 min-h-[100px]">
          {commentList.map((item) => (
            <CommentBox
              key={item._id}
              item={item}
              author={sessionEmail === item.authorEmail ? true : false}
            />
          ))}
        </div>
      )}
    </div>
  );
}

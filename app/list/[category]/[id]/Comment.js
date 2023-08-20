import { connectDB } from "@/util/database";
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

  return (
    <div className="flex flex-col bg-white w-full p-3 rounded-md space-y-3 ">
      <CommentWrite postId={postId} />
      {commentList.length === 0 ? (
        <div>작성된 댓글이 없습니다.</div>
      ) : (
        <div className="max-h-80 commentScrollBar">
          {commentList.map((item) => (
            <CommentBox key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

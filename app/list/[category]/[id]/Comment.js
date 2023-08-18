import { connectDB } from "@/util/database";
import CommentDel from "./CommentDel";
import CommentEdit from "./CommentEdit";
import CommentWrite from "./CommentWrite";

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
            <div
              key={item._id}
              className="w-full relative shadow-md p-1 px-4 rounded-md flex justify-between items-center"
            >
              <div className="flex space-x-5 text-sm items-center w-5/6">
                <span className="w-1/4">{item.author}</span>
                <span className="flex w-3/4 whitespace-pre-line">
                  {item.comment}
                </span>
              </div>
              <div className="flex flex-col w-1/6 justify-center items-center space-y-2 text-sm">
                <span>{item.commentAt.slice(2, 10)}</span>
                <div className="flex justify-evenly  items-center w-full">
                  <CommentEdit commentData={item} />
                  <CommentDel commentId={item._id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

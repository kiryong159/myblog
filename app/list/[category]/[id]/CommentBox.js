"use client";

import CommentDel from "./CommentDel";
import CommentEdit from "./CommentEdit";

export default function CommentBox({ item, author }) {
  return (
    <div className="w-full bg-white relative shadow-md p-1 px-4 rounded-md flex justify-between items-center">
      <div className="flex space-x-5 text-sm items-center w-5/6">
        <span className="w-1/4">{item.author}</span>
        <span className="flex w-3/4 whitespace-pre-line">{item.comment}</span>
      </div>
      <div className="flex flex-col w-1/6 justify-center items-center space-y-2 text-sm">
        <span>{item.commentAt.slice(2, 10)}</span>
        {author ? (
          <div className="flex justify-evenly  items-center w-full">
            <CommentEdit commentData={item} />
            <CommentDel commentId={item._id} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import CommentDel from "./CommentDel";
import CommentEdit from "./CommentEdit";

// 댓글 주인 / 댓글내용 / 댓글 삭제 수정 및 날자  컴포넌트
export default function CommentBox({ item, author, isDark }) {
  const [bigWidth, setBigWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 550) {
        setBigWidth(true);
      }
      if (window.innerWidth <= 549) {
        setBigWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full   relative shadow-md p-1 px-4 rounded-md flex justify-between items-center ${
        isDark ? "bg-gray-300 text-black" : "bg-white"
      }`}
    >
      <div className="flex space-x-5 text-sm items-center w-5/6">
        <span className="w-1/4 font-bold ">{item.author}</span>
        <span className="flex w-3/4 whitespace-pre-line">{item.comment}</span>
      </div>
      <div className="flex flex-col w-1/6 justify-center items-center space-y-2">
        {bigWidth ? (
          <span className="text-sm">{item.commentAt.slice(2, 10)}</span>
        ) : (
          <span className="text-[12px] ">{item.commentAt.slice(5, 10)}</span>
        )}
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

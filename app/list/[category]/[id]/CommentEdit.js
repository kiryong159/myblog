"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

//댓글 수정하는 곳
export default function CommentEdit({ commentData }) {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const router = useRouter();
  const onClick = () => {
    setEditMode((prev) => !prev);
  };

  const onValid = (data) => {
    fetch("/api/comment/edit", {
      method: "POST",
      body: JSON.stringify({
        comment: data.comment,
        commentId: commentData._id,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r === "ok") {
          onClick();
          router.refresh();
        }
      });
  };

  const editVars = {
    initial: { opacity: 0, scale: 0, x: 200, y: -50 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
    exit: { opacity: 0, scale: 0, x: 200, y: -50 },
  };
  return (
    <div className="flex ">
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
      <AnimatePresence>
        {editMode ? (
          <motion.div
            variants={editVars}
            initial="initial"
            animate="visible"
            exit="exit"
            className="p-3 px-5 absolute left-[4%] top-1/2 bg-purple-300 rounded-md space-y-3 z-10 w-full max-w-xl"
          >
            <h4 className=" text-center text-xl font-bold">댓글 수정</h4>
            <form
              className="flex  items-center space-x-3 "
              onSubmit={handleSubmit(onValid)}
            >
              <textarea
                {...register("comment", { required: "댓글을 써주세요" })}
                typeof="text"
                name="comment"
                placeholder="댓글을 입력하세요"
                defaultValue={commentData.comment}
                className="w-full shadow-md p-2 text-sm h-16 rounded-md"
              ></textarea>
              <div className="flex flex-col items-center w-1/4">
                {formState.errors.comment ? (
                  <div className="w-full p-1 text-center text-red-500 text-xs font-bold">
                    {formState.errors.comment.message}
                  </div>
                ) : null}
                <div className="grid grid-cols-2 space-x-2 mt-3">
                  <button
                    className="bg-red-300 rounded-md p-1 shadow-md font-bold w-full  transition-all hover:bg-red-400 hover:scale-110"
                    type="button"
                    onClick={onClick}
                  >
                    취소
                  </button>
                  <button
                    className="w-full font-bold bg-orange-300 rounded-md shadow-md p-1 transition-all hover:scale-110 hover:bg-orange-500"
                    type="submit"
                  >
                    수정
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

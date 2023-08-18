"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CommentEdit({ commentData }) {
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  console.log("commentEdit", editMode);
  const onClick = () => {
    setEditMode((prev) => !prev);
  };

  const onValid = (data) => {
    console.log(data);
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
      {editMode ? (
        <div className="p-3 px-5 absolute left-[4%] top-1/2 bg-black z-10">
          <form
            className="flex  items-center space-x-3"
            onSubmit={handleSubmit(onValid)}
          >
            <textarea
              {...register("comment", { required: "댓글을 써주세요" })}
              typeof="text"
              name="comment"
              placeholder="댓글을 입력하세요"
              defaultValue={commentData.comment}
              className="w-[500px] shadow-md p-2 text-sm h-16"
            ></textarea>
            <div className="flex flex-col w-1/4">
              {formState.errors.comment ? (
                <span className="w-full p-1 text-center text-red-500">
                  {formState.errors.comment.message}{" "}
                </span>
              ) : null}
              <div className="grid grid-cols-2 space-x-2 mt-3">
                <button
                  className="bg-red-300 rounded-md p-1"
                  type="button"
                  onClick={onClick}
                >
                  취소
                </button>
                <button
                  className="w-full h-auto font-bold bg-orange-300 rounded-md shadow-md p-1 transition-all hover:bg-orange-500"
                  type="submit"
                >
                  수정
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

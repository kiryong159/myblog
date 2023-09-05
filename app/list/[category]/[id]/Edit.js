"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

//글 수정 페이지
export default function PostEdit({ result, category, isDark }) {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  category = category.slice(1);

  const onClick = () => {
    setEditMode((prev) => !prev);
  };

  const onValid = async (event) => {
    await fetch("/api/post/edit", {
      method: "POST",
      body: JSON.stringify({
        postId: result._id,
        category: event.category,
        content: event.content,
        title: event.title,
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
    initial: { opacity: 0, scale: 0, y: -200, x: 260 },
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
    exit: { opacity: 0, scale: 0, y: -200, x: 260 },
  };

  return (
    <div>
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
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
          <>
            <motion.div
              variants={editVars}
              initial="initial"
              animate="visible"
              exit="exit"
              className={`absolute left-[20%] top-[10%]  rounded-md shadow-md space-y-3 w-3/5 z-30 ${
                isDark ? "bg-gray-400 text-black" : "bg-green-300"
              }`}
            >
              <h3 className="text-center pt-3 text-lg">Post Edit</h3>
              <form
                className=" flex flex-col p-3 "
                onSubmit={handleSubmit(onValid)}
              >
                <label htmlFor="category">Category</label>
                <select
                  {...register("category")}
                  name="category"
                  id="category"
                  className="flex w-full rounded-md p-1 my-2"
                  defaultValue={result.category}
                >
                  {category.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
                <label htmlFor="title">Title</label>
                <input
                  {...register("title")}
                  id="title"
                  name="title"
                  type="text"
                  className="p-1 px-3 my-2 mb-3  rounded-md"
                  defaultValue={result.title}
                />
                <label htmlFor="content" className="">
                  Content
                </label>
                <textarea
                  {...register("content")}
                  id="content"
                  name="content"
                  className="p-1 rounded-md px-3 my-2 h-60"
                  defaultValue={result.content}
                />
                <div className="grid grid-cols-2 space-x-2 mt-3">
                  <button
                    className="bg-red-300 rounded-md p-2"
                    type="button"
                    onClick={onClick}
                  >
                    취소
                  </button>
                  <button className="bg-green-400 rounded-md p-2" type="submit">
                    수정
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

//label magrin?

//input 공백 반환

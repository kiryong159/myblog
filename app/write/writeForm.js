"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

//글쓰기 form 페이지
export default function WriteForm({ category }) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const onClick = () => {
    return router.push("/");
  };

  /*   const handleImgChange = (event) => {
    const imgFile = event.target.files[0];
    if (imgFile) {
      const imageUrl = URL.createObjectURL(imgFile);
      setSelectedImage(imageUrl);
    }
  }; */

  const onValid = async (data) => {
    console.log(data);
    const datenow = new Date();
    // 현재 시간을 UTC 방식으로 변환하여 전송
    //그냥 datenow를 보내면 UTC와 KST(한국표준시) 의 차이때문에 시간이 다르게 저장됨.
    const datenowUTC = new Date(
      datenow.getTime() - datenow.getTimezoneOffset() * 60000
    ).toISOString();

    /*     await fetch("/api/post/write", {
      method: "POST",
      body: JSON.stringify({
        category: data.category,
        content: data.content,
        title: data.title,
        postAt: datenowUTC,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r === "ok") {
          router.push("/list/All");
          router.refresh();
        } else {
          // ok가 아닐시 코드
        }
      }); */
  };
  return (
    <div className="py-5 space-y-3">
      <h4 className="text-center text-3xl">글 쓰기 </h4>
      <form className="flex flex-col px-3" onSubmit={handleSubmit(onValid)}>
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="flex w-full rounded-md p-1 my-2 border-[1px] border-gray-700"
        >
          {category.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <div className="flex space-x-5">
          <label htmlFor="title">Title</label>
          {formState.errors.title ? (
            <span className="text-red-500 font-bold text-sm">
              {formState.errors.title.message}
            </span>
          ) : null}
        </div>

        <input
          {...register("title", { required: "제목을 써주세요." })}
          id="title"
          name="title"
          type="text"
          className="p-1 px-3 my-2 mb-3  rounded-md  border-[1px] border-gray-700"
        />
        <div className="flex space-x-5">
          <label htmlFor="content">Content</label>
          {formState.errors.content ? (
            <span className="text-red-500 font-bold text-sm">
              {formState.errors.content.message}
            </span>
          ) : null}
        </div>

        <textarea
          {...register("content", { required: "내용을 써주세요." })}
          id="content"
          name="content"
          className="p-2 rounded-md px-3 my-2 h-56 border-[1px] border-gray-700"
        />

        <div className="flex w-full mt-2">
          <label
            htmlFor="image"
            className=" w-1/6 flex p-3 rounded-md shadow-md bg-gray-100  items-center justify-center space-x-3 hover:bg-gray-300 cursor-pointer hover:scale-105 hover:text-purple-500 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="font-bold">사진</span>
          </label>
          <input
            {...register("image")}
            id="image"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-2 space-x-2 mt-2 p-3">
          <button
            className="bg-red-300 rounded-md p-2 font-bold hover:bg-red-400 hover:scale-105 transition-all"
            type="button"
            onClick={onClick}
          >
            취소
          </button>
          <button
            className="bg-green-400 rounded-md p-2 font-bold hover:bg-green-500 transition-all hover:scale-105"
            type="submit"
          >
            작성
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

//글쓰기 form 페이지
export default function WriteForm({ category }) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const onClick = () => {
    return router.back();
  };
  const onValid = async (data) => {
    console.log("writeForm의 data", data);
    const datenow = new Date();
    // 현재 시간을 UTC 방식으로 변환하여 전송
    //그냥 datenow를 보내면 UTC와 KST(한국표준시) 의 차이때문에 시간이 다르게 저장됨.
    const datenowUTC = new Date(
      datenow.getTime() - datenow.getTimezoneOffset() * 60000
    ).toISOString();

    await fetch("/api/post/write", {
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
      });
  };
  console.log(formState.errors);
  return (
    <div className="space-y-3">
      <h4 className="text-center text-3xl">글 쓰기 </h4>
      <form className="flex flex-col px-3" onSubmit={handleSubmit(onValid)}>
        <label htmlFor="category">Category</label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="flex w-full rounded-md p-1 my-2"
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
          className="p-1 px-3 my-2 mb-3  rounded-md"
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
          className="p-2 rounded-md px-3 my-2 h-56"
        />
        <div className="grid grid-cols-2 space-x-2 mt-3 p-3">
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

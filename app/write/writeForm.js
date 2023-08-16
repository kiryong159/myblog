"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

//글쓰기 폼 페잊
export default function WriteForm({ category }) {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const onClick = () => {
    router.back();
  };
  const onValid = async (data) => {
    console.log(data);
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
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          id="title"
          name="title"
          type="text"
          className="p-1 px-3 my-2 mb-3  rounded-md"
        />
        <label htmlFor="content" className="">
          Content
        </label>
        <textarea
          {...register("content")}
          id="content"
          name="content"
          className="p-2 rounded-md px-3 my-2 h-56"
        />
        <div className="grid grid-cols-2 space-x-2 mt-3 p-3">
          <button className="bg-red-300 rounded-md p-2" onClick={onClick}>
            취소
          </button>
          <button className="bg-green-400 rounded-md p-2" type="submit">
            작성
          </button>
        </div>
      </form>
    </div>
  );
}

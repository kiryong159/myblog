"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function CommentWrite({ postId, author, email }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const router = useRouter();
  const onValid = async (data) => {
    const datenow = new Date();
    const datenowUTC = new Date(
      datenow.getTime() - datenow.getTimezoneOffset() * 60000
    ).toISOString();
    await fetch("/api/comment/write", {
      method: "POST",
      body: JSON.stringify({
        author: author,
        authorEmail: email,
        comment: data.comment,
        parentId: postId,
        commentAt: datenowUTC,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if (r === "ok") {
          reset();
          router.refresh();
        }
      });
  };

  return (
    <div>
      <form
        className="flex items-center space-x-3"
        onSubmit={handleSubmit(onValid)}
      >
        <textarea
          {...register("comment", { required: "댓글을 써주세요" })}
          typeof="text"
          name="comment"
          placeholder="댓글을 입력하세요"
          className="w-3/4 shadow-md p-2 text-sm h-16"
        ></textarea>
        <div className="flex flex-col w-1/4">
          <span className="w-full p-1 text-center text-red-500">
            {formState.errors.comment ? formState.errors.comment.message : null}
          </span>
          <button
            className="w-full h-auto font-bold bg-orange-300 rounded-md shadow-md p-3 transition-all hover:bg-orange-500"
            type="submit"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

//댓글에 있어야할것들  => 작성자 , 댓글내용 , 부모post ID , 작성시기,

//답글 기능? 만든다면 (작성자 , 답글 내용 , 부모댓글ID, 작성시기 ) 댓글보이는곳에서 IF(답글? ) 이런식으로?

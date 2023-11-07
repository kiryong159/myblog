"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 좋아요 부분
export default function Like({ postId, likeCount }) {
  const [like, setLike] = useState(false);
  const router = useRouter();
  const likeClick = () => {
    //확인
    const local = localStorage.getItem(`like_${postId}`);

    if (local) {
      //있을때
      const deleteLike = localStorage.removeItem(`like_${postId}`);
      setLike(false);
      fetch("/api/post/like", {
        method: "POST",
        body: JSON.stringify({ postId: postId, value: false }),
      }).then(router.refresh());
    } else {
      //없을때
      const giveLike = localStorage.setItem(`like_${postId}`, `true`);
      setLike(true);
      fetch("/api/post/like", {
        method: "POST",
        body: JSON.stringify({ postId: postId, value: true }),
      }).then(router.refresh());
    }
  };

  useEffect(() => {
    const local = localStorage.getItem(`like_${postId}`);
    if (local) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);

  return (
    <div className="grid grid-cols-2 items-center p-3  bg-purple-50 h-12 w-28 mx-auto rounded-md shadow-md mb-4">
      <div
        onClick={likeClick}
        className="flex justify-center items-center hover:cursor-pointer "
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-6 h-6 transition-all ${
            like ? "fill-black scale-110" : ""
          }  `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </motion.svg>
      </div>
      <div className="flex justify-center items-center">
        <span>{likeCount}</span>
      </div>
    </div>
  );
}

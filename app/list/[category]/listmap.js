"use client";

import Link from "next/link";
import formattedDate from "@/util/formatDate";
import { useEffect, useState } from "react";

export default function ListMap({ result }) {
  const [페이지저장소, set페이지저장소] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const offset = 10;
  const listPage = Math.ceil(result.length / offset);

  useEffect(() => {
    let 임시숫자저장소 = [];
    for (let i = 1; i <= listPage; i++) {
      임시숫자저장소.push(i);
    }
    set페이지저장소(임시숫자저장소);
  }, [listPage]);

  const indexChange = (item) => {
    setPageIndex(item - 1);
  };

  return (
    <div className="">
      <div className="h-[530px] space-y-3">
        {result
          .slice(pageIndex * offset, pageIndex * offset + offset)
          .map((item) => (
            <div
              key={item._id}
              className="flex justify-between font-bold bg-gray-100 shadow-md w-full rounded-md p-3 hover:bg-gray-200 hover:text-purple-500 transition-all"
            >
              <Link
                className="flex space-x-5 w-3/4"
                href={`/list/${item.category}/${item._id}`}
              >
                <span className="text-xs text-gray-500">({item.category})</span>
                <span>{item.title}</span>
              </Link>
              <span className="text-gray-500 text-xs w-1/4 flex justify-end">
                {formattedDate(item.postAt.toString())}
              </span>
            </div>
          ))}
      </div>
      <div className="flex justify-center space-x-3 h-[25px]">
        {페이지저장소.map((item) => (
          <button
            className={`p-1 rounded-md shadow-md w-8 transition-all ${
              pageIndex + 1 === Number(item)
                ? "bg-purple-300 hover:cursor-default  ring-2 ring-purple-300 ring-offset-1"
                : "bg-white hover:bg-gray-300 hover:scale-110 "
            }`}
            onClick={() => indexChange(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

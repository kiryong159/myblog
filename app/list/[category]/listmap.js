"use client";

import Link from "next/link";
import formattedDate from "@/util/formatDate";
import { useEffect, useState } from "react";

export default function ListMap({ result }) {
  const [페이지저장소, set페이지저장소] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageArrIndex, setPageArrIndex] = useState(0);
  const offset = 10;
  const pageOffset = 5;
  const listPage = Math.ceil(result.length / offset);
  const MaxPage = Math.ceil(listPage / pageOffset) - 1;

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

  const pageArrMinus = () => {
    setPageArrIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const pageArrPlus = () => {
    setPageArrIndex((prev) => (prev === MaxPage ? MaxPage : prev + 1));
  };

  //페이지 0 1 2 ? maxpage ceil 존재여부?

  return (
    <div className="">
      <div className="h-[630px] 2sm:h-[570px] sm:h-[530px] space-y-3">
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
                {/*  {formattedDate(item.postAt.toString())} */}
                {item.postAt.slice(0, 10)}
              </span>
            </div>
          ))}
      </div>
      <div className="flex justify-center space-x-3  h-[25px]">
        {페이지저장소.length > 5 ? (
          <>
            <button
              onClick={pageArrMinus}
              className={`${
                pageArrIndex === 0 ? "cursor-default opacity-30 " : ""
              }`}
            >
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
                  d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                />
              </svg>
            </button>
            {페이지저장소
              .slice(
                pageArrIndex * pageOffset,
                pageArrIndex * pageOffset + pageOffset
              )
              .map((item) => (
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
            <button
              onClick={pageArrPlus}
              className={`${
                pageArrIndex === MaxPage ? "opacity-30 cursor-default" : ""
              }`}
            >
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
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>
            </button>
          </>
        ) : (
          페이지저장소.map((item) => (
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
          ))
        )}
        {}
      </div>
    </div>
  );
}

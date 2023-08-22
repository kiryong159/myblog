"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import formattedDate from "@/util/formatDate";
import { useRouter } from "next/navigation";

export default function Search() {
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState, reset } = useForm();

  const [keyword, setKeyword] = useState("");
  const [contentResult, setContentResult] = useState([]);
  const [titleResult, setTitleResult] = useState([]);
  const [resultState, setResultState] = useState(false);

  const [contentPage, setContentPage] = useState([]);
  const [titlePage, setTitlePage] = useState([]);
  const [contentNowIndex, setContetnNowIndex] = useState(0);
  const [titleNowIndex, setTitleNowIndex] = useState(0);

  const onClick = () => {
    setIsSearch((prev) => !prev);
  };

  const onValid = async (data) => {
    setKeyword(data.keyword);
    await fetch("/api/search", { method: "POST", body: data.keyword })
      .then((r) => r.json())
      .then((r) => {
        if (r === "no") {
          return console.log("않되");
        }
        const contentSearch = r.contentSearch.reverse();
        const titleSearch = r.titleSearch.reverse();
        setContentResult(contentSearch);
        setTitleResult(titleSearch);
        setResultState(true);
        reset();
      });
  };

  const pageGo = (item) => {
    router.push(`/list/${item.category}/${item._id}`);
    setResultState(false);
  };

  const contentIndexChange = (item) => {
    setContetnNowIndex(item - 1);
  };
  const titleIndexChange = (item) => {
    setTitleNowIndex(item - 1);
  };

  const searchVars = {
    initial: { opacity: 0, scale: 0, x: -180 },
    visible: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0, x: -180 },
  };

  const resultVars = {
    initial: { opacity: 0, scale: 0, y: -230, x: -100 },
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
    exit: { opacity: 0, scale: 0, y: -230, x: -100 },
  };

  const offset = 5;
  const contentMaxIndex = Math.ceil(contentResult.length / offset);
  const titleMaxIndex = Math.ceil(titleResult.length / offset);

  useEffect(() => {
    let newContentPage = [];
    for (let i = 1; i <= contentMaxIndex; i++) {
      newContentPage.push(i);
    }
    setContentPage(newContentPage);
  }, [contentMaxIndex]);

  useEffect(() => {
    let newTitleCount = [];
    for (let i = 1; i <= titleMaxIndex; i++) {
      newTitleCount.push(i);
    }
    setTitlePage(newTitleCount);
  }, [titleMaxIndex]);

  return (
    <div className="flex items-center space-x-2">
      <button onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isSearch ? (
          <motion.div
            variants={searchVars}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            className="flex space-x-2 items-center "
          >
            <input
              {...register("keyword", { required: "검색어를 입력하세요" })}
              name="keyword"
              type="text"
              className="flex p-1  px-3 rounded-md shadow-md "
            />
            <button
              className="text-xs font-bold p-1 px-4 rounded-md shadow-md transition-all bg-purple-300 hover:bg-purple-400 hover:scale-105"
              onClick={handleSubmit(onValid)}
            >
              검색
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {resultState ? (
          <motion.div
            variants={resultVars}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
            className="absolute flex space-y-3 flex-col p-3 rounded-md shadow-md h-full max-w-3xl max-h-[760px] w-full bg-green-300 top-[70px] right-0 z-20"
          >
            <div className="flex items-center">
              <button className="w-1/6" onClick={() => setResultState(false)}>
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
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </button>
              <h4 className="text-center text-3xl w-4/6 ">
                {keyword} 검색 결과
              </h4>
              <div className="w-1/6"></div>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold">
                제목 으로 검색 ({titleResult.length}) 개
              </h3>
              <div className="space-y-3 h-[275px]">
                {titleResult
                  .slice(
                    offset * titleNowIndex,
                    offset * titleNowIndex + offset
                  )
                  .map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between font-bold bg-white w-full rounded-md p-3 hover:bg-gray-200 hover:text-purple-500 transition-all"
                    >
                      <button
                        className=" flex w-3/4 space-x-5"
                        onClick={() => pageGo(item)}
                      >
                        <span className="text-xs text-gray-500">
                          ({item.category})
                        </span>
                        <span>{item.title}</span>
                      </button>
                      <span className="text-gray-500 text-xs w-1/4 flex justify-end">
                        {formattedDate(item.postAt.toString())}
                      </span>
                    </div>
                  ))}
              </div>
              <div className="space-x-2 w-full flex justify-center h-[25px]">
                {titlePage.length !== 0
                  ? titlePage.map((item) => (
                      <button
                        className={`p-1 rounded-md shadow-md w-8 transition-all ${
                          titleNowIndex + 1 === Number(item)
                            ? "bg-purple-300 hover:cursor-default"
                            : "bg-white hover:bg-gray-300 hover:scale-110 "
                        }`}
                        key={item}
                        onClick={() => titleIndexChange(item)}
                      >
                        {item}
                      </button>
                    ))
                  : null}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold">
                내용 으로 검색 ({contentResult.length}) 개
              </h3>
              <div className="space-y-3 h-[275px]">
                {contentResult
                  .slice(
                    offset * contentNowIndex,
                    offset * contentNowIndex + offset
                  )
                  .map((item) => (
                    <div
                      key={item._id}
                      className="flex justify-between font-bold bg-white w-full rounded-md p-3 hover:bg-gray-200 hover:text-purple-500 transition-all"
                    >
                      <button
                        className=" flex w-3/4 space-x-5"
                        onClick={() => pageGo(item)}
                      >
                        <span className="text-xs text-gray-500">
                          ({item.category})
                        </span>
                        <span>{item.title}</span>
                      </button>
                      <span className="text-gray-500 text-xs w-1/4 flex justify-end">
                        {formattedDate(item.postAt.toString())}
                      </span>
                    </div>
                  ))}
              </div>
              <div className="space-x-2 w-full flex justify-center h-[25px]">
                {contentPage.length !== 0
                  ? contentPage.map((item) => (
                      <button
                        key={item}
                        onClick={() => contentIndexChange(item)}
                        className={`p-1 rounded-md shadow-md w-8 transition-all ${
                          contentNowIndex + 1 === Number(item)
                            ? "bg-purple-300 hover:cursor-default"
                            : "bg-white hover:bg-gray-300 hover:scale-110 "
                        }`}
                      >
                        {item}
                      </button>
                    ))
                  : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// 페이지전환시 검색끄기 isSearch 를 로컬스토리지에 저장하는방법 or lInk를 안쓰고 router.push쓰기

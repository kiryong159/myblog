"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import formattedDate from "@/util/formatDate";
import { useRouter } from "next/navigation";

export default function Search({ isDark }) {
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState, reset } = useForm();
  const [keyword, setKeyword] = useState("");
  const [contentResult, setContentResult] = useState([]);
  const [Wwidth, setWwidth] = useState(false);
  const [Wheight, setWheight] = useState(false);

  const [titleResult, setTitleResult] = useState([]);
  const [resultState, setResultState] = useState(false);

  const [contentPage, setContentPage] = useState([]);
  const [titlePage, setTitlePage] = useState([]);
  const [contentNowIndex, setContetnNowIndex] = useState(0);
  const [titleNowIndex, setTitleNowIndex] = useState(0);
  const [CpageArrIndex, setCpageArrIndex] = useState(0);
  const [TpageArrIndex, setTpageArrIndex] = useState(0);

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
    setContetnNowIndex(0);
    setTitleNowIndex(0);
    setCpageArrIndex(0);
    setTpageArrIndex(0);
  };

  const contentIndexChange = (item) => {
    setContetnNowIndex(item - 1);
  };
  const titleIndexChange = (item) => {
    setTitleNowIndex(item - 1);
  };

  const overlayClick = () => {
    setResultState(false);
    setContetnNowIndex(0);
    setTitleNowIndex(0);
    setCpageArrIndex(0);
    setTpageArrIndex(0);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 639) {
        setWwidth(true);
      }
      if (window.innerWidth >= 640) {
        setWwidth(false);
      }
      if (window.innerHeight >= 880) {
        setWheight(false);
      }
      if (window.innerHeight <= 879) {
        setWheight(true);
      }
    };
    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const searchVars = {
    initial: (Wwidth) => {
      return { opacity: 0, scale: 0.5, x: Wwidth ? -180 : -280 };
    },
    visible: (Wwidth) => {
      return {
        opacity: 1,
        scale: 1,
        x: Wwidth ? -150 : -250,
        transition: { delay: 0.5 },
      };
    },
    exit: (Wwidth) => {
      return { opacity: 0, scale: 0.5, x: Wwidth ? -180 : -280 };
    },
  };

  const resultVars = {
    initial: { opacity: 0, scale: 0.5, y: -200, x: 0 },
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
    exit: { opacity: 0, scale: 0.5, y: -200, x: -0 },
  };
  const overlayVars = {
    initial: { opacity: 0, scale: 1, y: 0 },
    visible: { opacity: 0.3, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1, y: 0, x: 0 },
  };

  const offset = 5;
  const pageOffset = 5;
  const contentMaxIndex = Math.ceil(contentResult.length / offset);
  const titleMaxIndex = Math.ceil(titleResult.length / offset);
  const CMaxPage = Math.ceil(contentMaxIndex / pageOffset) - 1;
  const TMaxPage = Math.ceil(titleMaxIndex / pageOffset) - 1;

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

  const CpageArrMinus = () => {
    setCpageArrIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const CpageArrPlus = () => {
    setCpageArrIndex((prev) => (prev === CMaxPage ? CMaxPage : prev + 1));
  };
  const TpageArrMinus = () => {
    setTpageArrIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const TpageArrPlus = () => {
    setTpageArrIndex((prev) => (prev === TMaxPage ? TMaxPage : prev + 1));
  };

  const ResultBackBtn = () => {
    setResultState(false);
    setContetnNowIndex(0);
    setTitleNowIndex(0);
    setCpageArrIndex(0);
    setTpageArrIndex(0);
  };

  return (
    <div className="relative flex items-center space-x-2">
      <motion.button
        onClick={onClick}
        className={`relative transition-all duration-500  ${
          isSearch
            ? "right-[150px] sm:right-[250px] "
            : "right-[0px]  sm:right-[0px] delay-500"
        }`}
      >
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
      </motion.button>
      <AnimatePresence>
        {isSearch ? (
          <motion.div
            custom={Wwidth}
            variants={searchVars}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.5,
            }}
            className=" flex space-x-2 items-center  "
          >
            <form className="flex absolute w-[150px] sm:w-[250px]  space-x-1">
              <input
                {...register("keyword", { required: "검색어를 입력하세요" })}
                name="keyword"
                type="text"
                placeholder={
                  formState.errors.keyword === undefined
                    ? "검색어를 입력하세요"
                    : `${formState.errors.keyword.message}`
                }
                className="flex p-1  px-3 w-[80%] rounded-md shadow-md border-[1px] border-gray-700 text-black text-xs sm:text-base"
              />
              <button
                className="w-[20%] text-xs font-bold rounded-md shadow-md transition-all text-black bg-purple-300 hover:bg-purple-400 hover:scale-105"
                onClick={handleSubmit(onValid)}
              >
                검색
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {resultState ? (
          <div className="">
            {/* 오버레이 */}
            <motion.div
              variants={overlayVars}
              initial="initial"
              animate="visible"
              exit="exit"
              className={` absolute h-[103vh] w-[200vw] overflow-hidden  top-[-3vh] left-[-100vw] z-50 cursor-pointer ${
                isDark === true ? "bg-black" : "bg-gray-900"
              }`}
              onClick={overlayClick}
              transition={{ type: "tween" }}
            ></motion.div>

            <motion.div
              /* 검색 결과창 */
              variants={resultVars}
              initial="initial"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
              className={`${
                Wheight ? "SearchHeightCalc" : "h-[780px]"
              } SearchScroll absolute flex left-[-254px] 4sm:left-[-275px]  2sm:left-[-430px] sm:left-[-550px] md:left-[-650px] lg:left-[-800px] xl:left-[-700px] 2xl:left-[-800px] 3xl:left-[-1000px]  4xl:left-[-1200px] w-[300px] 2sm:w-[450px] sm:w-[600px]  md:w-[700px] top-[60px] space-y-3 flex-col p-3 rounded-md shadow-md  max-w-3xl z-[60] ${
                isDark === true ? "bg-gray-600 text-white" : "bg-white"
              }`}
            >
              {/* backBtn ,  검색결과 */}
              <div className="flex items-center">
                <div className="w-1/6">
                  <button className="" onClick={ResultBackBtn}>
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
                </div>
                <h4 className="bold text-center text-[20px] 2sm:text-3xl w-4/6 ">
                  {keyword} 검색 결과
                </h4>
                <div className="w-1/6"></div>
              </div>
              <div>
                {/* 제목 검색 div */}
                <h3 className="mb-3 text-xl font-bold">
                  제목 으로 검색 ({titleResult.length}) 개
                </h3>
                {/* 제목으로 검색 결과 출력 */}
                <div className="space-y-3 h-[300px] 2sm:h-[275px]">
                  {titleResult
                    .slice(
                      offset * titleNowIndex,
                      offset * titleNowIndex + offset
                    )
                    .map((item) => (
                      <div
                        key={item._id}
                        className={`flex group justify-between font-bold w-full shadow-md rounded-md p-3   transition-all ${
                          isDark === true
                            ? "bg-gray-400 hover:bg-gray-300 hover:text-purple-500"
                            : "bg-gray-100 hover:bg-gray-200 hover:text-purple-500"
                        }`}
                      >
                        <button
                          className="flex items-center w-3/4 space-x-1 sm:space-x-5"
                          onClick={() => pageGo(item)}
                        >
                          <span
                            className={`text-[10px] sm:text-[12px]  ${
                              isDark === true
                                ? "text-gray-100 group-hover:text-gray-600"
                                : "text-gray-500"
                            }`}
                          >
                            ({item.category})
                          </span>
                          <span className="text-[12px] sm:text-[16px]">
                            {item.title}
                          </span>
                        </button>
                        <span
                          className={` text-xs w-1/4 flex justify-end ${
                            isDark === true
                              ? "text-gray-100 group-hover:text-gray-600"
                              : "text-gray-500"
                          }`}
                        >
                          {item.postAt.slice(2, 10)}
                        </span>
                      </div>
                    ))}
                </div>
                {/* 제목으로 검색한 결과의 페이지 */}
                <div className="space-x-2 w-full flex justify-center mt-3 sm:mt-0 h-[25px] ">
                  {titlePage.length !== 0 ? (
                    titlePage.length > pageOffset ? (
                      <>
                        <button
                          onClick={TpageArrMinus}
                          className={`${
                            TpageArrIndex === 0
                              ? "cursor-default opacity-30 "
                              : ""
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
                        {titlePage
                          .slice(
                            TpageArrIndex * pageOffset,
                            TpageArrIndex * pageOffset + pageOffset
                          )
                          .map((item) => (
                            <button
                              className={`p-1 rounded-md shadow-md w-8 transition-all ${
                                titleNowIndex + 1 === Number(item)
                                  ? "bg-purple-300 hover:cursor-default ring-2 ring-purple-300 ring-offset-2 "
                                  : isDark
                                  ? "bg-gray-400 hover:text-gray-700 hover:bg-gray-300 hover:scale-110"
                                  : "bg-white hover:bg-gray-300 hover:scale-110 "
                              }`}
                              key={item}
                              onClick={() => titleIndexChange(item)}
                            >
                              {item}
                            </button>
                          ))}
                        <button
                          onClick={TpageArrPlus}
                          className={`${
                            TpageArrIndex === TMaxPage
                              ? "opacity-30 cursor-default"
                              : ""
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
                      titlePage.map((item) => (
                        <button
                          className={`p-1 rounded-md shadow-md w-8 transition-all ${
                            titleNowIndex + 1 === Number(item)
                              ? "bg-purple-300 hover:cursor-default ring-2 ring-purple-300 ring-offset-2 "
                              : isDark
                              ? "bg-gray-400 hover:text-gray-700 hover:bg-gray-300 hover:scale-110"
                              : "bg-white hover:bg-gray-300 hover:scale-110 "
                          }`}
                          key={item}
                          onClick={() => titleIndexChange(item)}
                        >
                          {item}
                        </button>
                      ))
                    )
                  ) : null}
                </div>
              </div>
              <div>
                {/* 내용 검색 div */}
                <h3 className="mb-3 text-xl font-bold">
                  내용 으로 검색 ({contentResult.length}) 개
                </h3>
                {/* 내용으로 검색 결과 출력 */}
                <div className="space-y-3 h-[300px]  2sm:h-[275px]">
                  {contentResult
                    .slice(
                      offset * contentNowIndex,
                      offset * contentNowIndex + offset
                    )
                    .map((item) => (
                      <div
                        key={item._id}
                        className={`flex group justify-between font-bold w-full shadow-md rounded-md p-3   transition-all ${
                          isDark === true
                            ? "bg-gray-400 hover:bg-gray-300 hover:text-purple-500"
                            : "bg-gray-100 hover:bg-gray-200 hover:text-purple-500"
                        }`}
                      >
                        <button
                          className=" flex items-center w-3/4 space-x-1 sm:space-x-5"
                          onClick={() => pageGo(item)}
                        >
                          <span
                            className={`text-[10px] sm:text-[12px]  ${
                              isDark === true
                                ? "text-gray-100 group-hover:text-gray-600"
                                : "text-gray-500"
                            }`}
                          >
                            ({item.category})
                          </span>
                          <span className="text-[12px] sm:text-[16px]">
                            {item.title}
                          </span>
                        </button>
                        <span
                          className={` text-xs w-1/4 flex justify-end ${
                            isDark === true
                              ? "text-gray-100 group-hover:text-gray-600"
                              : "text-gray-500"
                          }`}
                        >
                          {item.postAt.slice(2, 10)}
                        </span>
                      </div>
                    ))}
                </div>
                {/* 내용으로 검색한 결과의 페이지 */}
                <div className="space-x-2 w-full flex justify-center mt-3 sm:mt-0 h-[25px] ">
                  {contentPage.length !== 0 ? (
                    contentPage.length > pageOffset ? (
                      <>
                        {/* 5페이지 이상일 경우 */}
                        <button
                          onClick={CpageArrMinus}
                          className={`${
                            CpageArrIndex === 0
                              ? "cursor-default opacity-30 "
                              : ""
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
                        {contentPage
                          .slice(
                            CpageArrIndex * pageOffset,
                            CpageArrIndex * pageOffset + pageOffset
                          )
                          .map((item) => (
                            <button
                              key={item}
                              onClick={() => contentIndexChange(item)}
                              className={`p-1 rounded-md shadow-md w-8 transition-all ${
                                contentNowIndex + 1 === Number(item)
                                  ? "bg-purple-300 hover:cursor-default ring-2 ring-purple-300 ring-offset-2 "
                                  : isDark
                                  ? "bg-gray-400 hover:text-gray-700 hover:bg-gray-300 hover:scale-110"
                                  : "bg-white hover:bg-gray-300 hover:scale-110 "
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        <button
                          onClick={CpageArrPlus}
                          className={`${
                            CpageArrIndex === CMaxPage
                              ? "opacity-30 cursor-default"
                              : ""
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
                      /* 5페이지 미만일 경우 */
                      contentPage.map((item) => (
                        <button
                          key={item}
                          onClick={() => contentIndexChange(item)}
                          className={`p-1 rounded-md shadow-md w-8 transition-all ${
                            contentNowIndex + 1 === Number(item)
                              ? "bg-purple-300 hover:cursor-default ring-2 ring-purple-300 ring-offset-2 "
                              : isDark
                              ? "bg-gray-400 hover:text-gray-700 hover:bg-gray-300 hover:scale-110"
                              : "bg-white hover:bg-gray-300 hover:scale-110 "
                          }`}
                        >
                          {item}
                        </button>
                      ))
                    )
                  ) : null}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

// 페이지전환시 검색끄기 isSearch 를 로컬스토리지에 저장하는방법 or lInk를 안쓰고 router.push쓰기

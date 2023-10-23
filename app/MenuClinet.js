"use client";

import LogInBtn from "@/util/LogInBtn";
import LogOutBtn from "@/util/LogOutBtn";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

//화면 768이하 에서 생기는 메뉴 버튼 및 등장하는 메뉴들
// Info (nav 프로필있는곳) 수정하면 여기 button도 같이 수정해줘야함.

export default function MenuClient({
  postCount,
  isDark,
  TodayCount,
  TotalCount,
  session,
  admin,
}) {
  const [onMenu, setOnMenu] = useState(false);
  const router = useRouter();
  const [Wheight, setWheight] = useState(false);
  const topMenuUrl = ["profile", "create"];

  const menuVar = {
    start: { x: -300, scale: 0.8 },
    animate: { x: 0, scale: 1 },
    exit: { x: -300, scale: 0.8 },
  };

  const navClick = (href) => {
    router.push(`${href}`);
    setOnMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setOnMenu(false);
      }
      if (window.innerHeight >= 660) {
        setWheight(false);
      }
      if (window.innerHeight <= 659) {
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

  return (
    <>
      <button className="md:hidden" onClick={() => setOnMenu(true)}>
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
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <AnimatePresence>
        {onMenu ? (
          <>
            <motion.div /* 오버레이 */
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-0 z-[5] bg-gray-500 w-[100vw] h-[100vh] "
              onClick={() => setOnMenu(false)}
            />
            <motion.div /* 메뉴바 */
              variants={menuVar}
              initial="start"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className={`absolute  overflow-y-auto ${
                Wheight ? "MenuHeightCalc MenuScroll" : ""
              } py-2 space-y-1 z-10 w-[200px]  left-0 top-[90px] flex flex-col rounded-md ${
                isDark ? "bg-gray-700" : "bg-white "
              }`}
            >
              <div className="grid grid-cols-1 gap-1 p-1 ">
                {/* 상단 메뉴 */}
                {topMenuUrl.map((item) => {
                  return (
                    <button
                      key={item}
                      className="px-1 py-1 whitespace-nowrap text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all"
                      onClick={() => navClick(`/${item}`)}
                    >
                      {item === "profile" ? "프로필" : "제작 도움"}
                    </button>
                  );
                })}
                <div className="border-b border-gray-400  border-solid m-1" />
                {/* 카테고리 메뉴  */}
                {postCount.map((item, index) => (
                  <button
                    onClick={() => navClick(`/list/${Object.keys(item)}`)}
                    className="px-1 py-1  text-center text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all "
                    key={index}
                  >
                    {Object.keys(item)} ({Object.values(item)})
                  </button>
                ))}
                <div className="border-b border-gray-400  border-solid m-1" />
                <div /* 로그인 아웃 버튼 / 글쓰기 버튼*/
                  className={`grid  items-center justify-center text-center my-1 ${
                    admin ? "grid-cols-2" : ""
                  }`}
                >
                  <div className="flex justify-center items-center">
                    {session ? (
                      <LogOutBtn defaultView={true} />
                    ) : (
                      <LogInBtn defaultView={true} />
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {admin ? (
                      <Link
                        href="/write"
                        className="flex 2sm:flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                        <span>글쓰기</span>
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="border-b border-gray-400  border-solid m-1" />
                <div /* 방문자 카운트 */
                  className={`w-[90%] h-[65px] flex items-start justify-center p-3 flex-col space-y-2  rounded-md shadow-md  mx-auto font-bold text-[14px] mt-2 ${
                    isDark ? "bg-gray-400" : "bg-gray-50"
                  }`}
                >
                  <div className="space-x-2">
                    <span>Today :</span>
                    <span>{TodayCount ? TodayCount : 0}</span>
                  </div>
                  <div className="space-x-2">
                    <span>Total :</span>
                    <span>{TotalCount ? TotalCount : 0}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

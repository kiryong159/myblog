"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MenuClient({ postCount, isDark }) {
  const [onMenu, setOnMenu] = useState(false);
  const router = useRouter();
  const topMenu = ["profile", "create"];

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-0 z-[5] bg-gray-500 w-[100vw] h-[100vh] "
              onClick={() => setOnMenu(false)}
            />
            <motion.div
              variants={menuVar}
              initial="start"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className={`absolute py-2 space-y-1 z-10 w-[200px]  left-0 top-[90px] flex flex-col rounded-md ${
                isDark ? "bg-gray-700" : "bg-white "
              }`}
            >
              <div className="grid grid-cols-1 gap-1 p-1 ">
                {topMenu.map((item) => {
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
                {postCount.map((item, index) => (
                  <button
                    onClick={() => navClick(`/list/${Object.keys(item)}`)}
                    className="px-1 py-1  text-center text-base rounded-md font-bold hover:bg-gray-200 hover:text-purple-500 transition-all "
                    key={index}
                  >
                    {Object.keys(item)} ({Object.values(item)})
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

// Info (nav 프로필있는곳) 수정하면 여기 button도 같이 수정해줘야함.

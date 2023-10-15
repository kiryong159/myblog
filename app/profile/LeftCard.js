"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LeftCard({
  imgCount,
  imgsrc1,
  imgsrc2,
  imgsrc3,
  imgsrc4,
  imgsrc5,
  imgsrc6,
  imgsrc7,
  imgsrc8,
}) {
  const srcArr = [
    imgsrc1,
    imgsrc2,
    imgsrc3,
    imgsrc4,
    imgsrc5,
    imgsrc6,
    imgsrc7,
    imgsrc8,
  ];
  imgCount = Number(imgCount);
  let imgArr = [];
  for (let i = 1; i <= imgCount; i++) {
    imgArr.push(i);
  }
  const [imgpage, setImgpage] = useState(1);

  const onClick = (item) => {
    setImgpage(item);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setImgpage((prev) => (prev === imgCount ? 1 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(timer); // 언마운트 될때  타이머 정리 해서 메모리 누수방지
    };
  }, []);
  return (
    <div className="max-h-full">
      <div className="flex w-full justify-center items-center h-[220px]">
        <AnimatePresence>
          {imgArr.map((item) => {
            const srcSelect = srcArr[item - 1];
            return imgpage === item ? (
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                key={item}
                alt="Image"
                src={srcSelect}
                className={`absolute rounded-md shadow-md max-w-[90%] max-h-[220px] transition-opacity duration-700`}
              />
            ) : null;
          })}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center mx-auto p-5 space-x-2 ">
        {imgArr.map((item) => (
          <motion.div
            key={item}
            onClick={() => onClick(item)}
            className={` bg-gray-700 h-3 rounded-full cursor-pointer transition-all ${
              imgpage === item ? "w-10" : "w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

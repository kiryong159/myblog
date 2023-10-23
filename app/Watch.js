"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Watch({ isDark }) {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [second, setSecond] = useState("");
  const [rotatedeg, setRotatedeg] = useState(0);
  const [minrotatedeg, setMinRotatedeg] = useState(0);
  const [hourrotatedeg, setHourRotatedeg] = useState(0);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const Time = () => {
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, 0);
    const Minutes = String(date.getMinutes()).padStart(2, 0);
    const Second = String(date.getSeconds()).padStart(2, 0);
    setHours(Hours);
    setMinutes(Minutes);
    setSecond(Second);
    setRotatedeg(date.getSeconds() * 6);

    if (Number(Second) < 10) {
      setMinRotatedeg(date.getMinutes() * 6);
    } else if (Number(Second) < 20) {
      setMinRotatedeg(date.getMinutes() * 6 + 1);
    } else if (Number(Second) < 30) {
      setMinRotatedeg(date.getMinutes() * 6 + 2);
    } else if (Number(Second) < 40) {
      setMinRotatedeg(date.getMinutes() * 6 + 3);
    } else if (Number(Second) < 50) {
      setMinRotatedeg(date.getMinutes() * 6 + 4);
    } else if (Number(Second) < 59) {
      setMinRotatedeg(date.getMinutes() * 6 + 5);
    }

    if (Number(Hours) > 12) {
      if (Number(Minutes) < 12) {
        setHourRotatedeg((date.getHours() - 12) * 30);
      } else if (Number(Minutes) < 24) {
        setHourRotatedeg((date.getHours() - 12) * 30 + 6);
      } else if (Number(Minutes) < 36) {
        setHourRotatedeg((date.getHours() - 12) * 30 + 12);
      } else if (Number(Minutes) < 48) {
        setHourRotatedeg((date.getHours() - 12) * 30 + 18);
      } else if (Number(Minutes) < 59) {
        setHourRotatedeg((date.getHours() - 12) * 30 + 24);
      }
    } else {
      if (Number(Minutes) < 12) {
        setHourRotatedeg(date.getHours() * 30);
      } else if (Number(Minutes) < 24) {
        setHourRotatedeg(date.getHours() * 30 + 6);
      } else if (Number(Minutes) < 36) {
        setHourRotatedeg(date.getHours() * 30 + 12);
      } else if (Number(Minutes) < 48) {
        setHourRotatedeg(date.getHours() * 30 + 18);
      } else if (Number(Minutes) < 59) {
        setHourRotatedeg(date.getHours() * 30 + 24);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(Time, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`HomeB flex  items-center justify-center rounded-md shadow-md overflow-hidden ${
        isDark ? "bg-gray-400 text-white " : "bg-purple-50 text-black"
      }`}
    >
      <div
        className={`flex items-center justify-center relative w-80 h-80  rounded-full ${
          isDark ? "bg-gray-400" : "bg-purple-50"
        }`}
      >
        <motion.div
          style={{ transform: `rotate(${rotatedeg}deg)` }}
          className={`absolute w-full h-full items-center justify-center  origin-center bg-transparent rounded-md  transition-all duration-1000 ${
            second === "00" ? "transition-none" : ""
          }`}
        >
          <div
            className={`absolute left-0 right-0 mx-auto top-4 w-1 h-36 rounded-md ${
              isDark ? "bg-gray-200" : "bg-blue-200"
            } `}
          />
        </motion.div>
        <motion.div
          style={{ transform: `rotate(${minrotatedeg}deg)` }}
          className={`absolute w-full h-full items-center justify-center  origin-center bg-transparent rounded-md  transition-all duration-1000 ${
            minutes === "00" ? "transition-none" : ""
          }`}
        >
          <div
            className={`absolute left-0 right-0 mx-auto top-4 w-2 h-36   rounded-md ${
              isDark ? "bg-gray-600" : " bg-blue-400"
            }`}
          />
        </motion.div>
        <motion.div
          style={{ transform: `rotate(${hourrotatedeg}deg)` }}
          className={`absolute w-full h-full items-center justify-center  origin-center bg-transparent rounded-md  transition-all duration-1000 ${
            hours === "12" ? "transition-none" : ""
          }`}
        >
          <div
            className={`absolute left-0 right-0 mx-auto top-16 w-3 h-24 rounded-md ${
              isDark ? "bg-gray-700" : "bg-blue-500"
            }`}
          />
        </motion.div>
        <div
          className={`absolute w-full h-full items-center justify-center bg-transparent}`}
        >
          <div
            className={`absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto w-7 h-7 rounded-full  ${
              isDark ? "bg-gray-500" : "bg-purple-300"
            }`}
          />
        </div>
        <div className="absolute   w-full h-full items-center justify-center">
          {num.map((item) => {
            const deg = 30 * item;
            const x =
              Math.round(140 * Math.sin((deg * Math.PI) / 180) * 10000) / 10000;
            const y =
              Math.round(140 * Math.cos((deg * Math.PI) / 180) * 10000) / 10000;
            return (
              <div
                className="text-xl w-5 h-5 flex items-center justify-center absolute left-0 right-0 mx-auto top-0 bottom-0 my-auto"
                style={{
                  transform: ` translate(${x}px,${-y}px)`,
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
        {hours ? (
          <div className="absolute space-x-2 text-[45px] font-bold flex justify-center items-center left-0 right-0 mx-auto top-44">
            <span>{hours}</span>
            <span className="text-[30px]">:</span>
            <span>{minutes}</span>
            <span className="text-[30px]">:</span>
            <span>{second}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

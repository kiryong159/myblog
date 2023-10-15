"use client";

import { useEffect, useState } from "react";

export default function Calender({ isDark }) {
  const [yearState, setYearState] = useState(0);
  const [monthState, setMonthState] = useState(0);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date2 = new Date();
  const yearCheck = date2.getFullYear();
  const monthCheck = date2.getMonth() + 1;
  const dateCheck = date2.getDate();
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    setMonthState(month);
    setYearState(year);
  }, []);

  const todayCheck = Boolean(
    yearState === yearCheck && monthState === monthCheck
  );

  //마지막 날을 구하고싶으면 구하고 싶은달 의 0일 을  new Date하면 마지막 날을 찍어줌
  const prev마지막날 = new Date(yearState, monthState - 1, 0);
  const current마지막날 = new Date(yearState, monthState, 0);
  const prevLDate = prev마지막날.getDate();
  const prevLDays = prev마지막날.getDay();
  const currentLDate = current마지막날.getDate();
  const currentLDays = current마지막날.getDay();

  console.log("지난달Date", prevLDate, "Days", prevLDays);
  console.log("이번달Date", currentLDate, "Days", currentLDays);

  let prevCalender = [];
  for (let i = prevLDays === 6 ? -1 : prevLDays; i >= 0; i--) {
    prevCalender.push(prevLDate - i);
  }
  /*   console.log("지난달 남은달력", prevCalender); */

  let currentCalender = [];
  for (let i = 1; i <= currentLDate; i++) {
    currentCalender.push(i);
  }
  /*   console.log("이번달 달력", currentCalender); */

  let nextCalender = [];
  for (let i = currentLDays === 6 ? 7 : 1; i <= 6 - currentLDays; i++) {
    nextCalender.push(i);
  }
  /*   console.log("다음달 달력", nextCalender); */

  const prevBtn = (m) => {
    if (m === 1) {
      setYearState((prev) => prev - 1);
    }
    setMonthState((prev) => (prev === 1 ? 12 : prev - 1));
  };
  const nextBtn = (m) => {
    if (m === 12) {
      setYearState((prev) => prev + 1);
    }
    setMonthState((prev) => (prev === 12 ? 1 : prev + 1));
  };

  return (
    <div
      className={`HomeD w-full h-[97%] space-y-2 rounded-md shadow-md ${
        isDark ? "bg-gray-400 text-white" : "bg-purple-50"
      } `}
    >
      <div className="flex justify-between items-center h-[15%] px-16 ">
        <button
          className={`hover:scale-125 transition-all ${
            isDark ? "DArrwBtn" : "ArrwBtn"
          }`}
          onClick={() => prevBtn(monthState)}
        >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className=" text-xl font-bold">
          {yearState} 년 {monthState}월
        </div>
        <button
          className={`hover:scale-125 transition-all ${
            isDark ? "DArrwBtn" : "ArrwBtn"
          }`}
          onClick={() => nextBtn(monthState)}
        >
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="DaysGrid px-3">
        {days.map((item) => (
          <div className="" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="CalenderGrid px-3 pb-3">
        {prevCalender.map((item) => (
          <div className="DaysCss PrevDays" key={item}>
            {item}
          </div>
        ))}
        {currentCalender.map((item) => (
          <div
            className={`DaysCss hover:scale-110 hover:shadow-md transition-all duration-100 ${
              todayCheck
                ? item === dateCheck
                  ? isDark
                    ? " bg-gray-300"
                    : " bg-purple-200"
                  : ""
                : ""
            }`}
            key={item}
          >
            {item}
          </div>
        ))}
        {nextCalender.map((item) => (
          <div className="DaysCss NextDays" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

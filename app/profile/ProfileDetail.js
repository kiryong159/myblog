"use client";

import JsCard from "./JsCard";
import LeftCard from "./LeftCard";
import HtmlCssCard from "./HtmlCssCard";
import ReactCard from "./ReactCard";
import NextCard from "./NextCard";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

//프로필 페이지

export default function ProfileDetail({ isDark }) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);

  const isInView = useInView(ref, { amount: 0.4, once: true });
  const isInView2 = useInView(ref2, { amount: 0.4, once: true });
  const isInView3 = useInView(ref3, { amount: 0.4, once: true });
  const isInView4 = useInView(ref4, { amount: 0.4, once: true });
  const isInView5 = useInView(ref5, { amount: 0.1, once: true });
  const isInView6 = useInView(ref6, { amount: 0.2, once: true });
  const isInView7 = useInView(ref7, { amount: 0.3, once: true });
  const isInView8 = useInView(ref8, { amount: 0.3, once: true });
  const isInView9 = useInView(ref9, { amount: 0.3, once: true });
  const isInView10 = useInView(ref10, { amount: 0.4, once: true });
  return (
    <>
      <h1
        className={`text-center text-3xl text-bold ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        프로필
      </h1>
      <div className="custom-shape-divider-bottom-1695356156">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col w-full bg-white h-58 p-5 space-y-2 shadow-md rounded-md text-[14px] 2sm:text-[16px]">
        <ul className="p-5 space-y-2">
          <li>박기룡(1993.01.01)</li>
          <li>한마디 : 모르면 검색하자 </li>
          <li>장점 : 검색을 잘함</li>
          <li>단점 : 미적 감각이 없음</li>
          <li>2022.10.25 코딩 공부 시작</li>
          <li>GitHub : https://github.com/kiryong159</li>
        </ul>
      </div>
      <h1
        className={`text-center text-3xl text-bold mt-10 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        배운 기술
      </h1>
      {/* 카드1 */}
      <div
        ref={ref}
        className={`GradientBox flex w-full items-center h-[400px] sm:h-[350px] p-1 2sm:p-5 sm:px-8 mt-12  rounded-md transition-all duration-[1.0s] ${
          isInView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center w-1/2 p-3 space-y-2 max-h-full relative">
          <LeftCard
            imgCount="5"
            imgsrc1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/KakaoClone-1.jpg"
            imgsrc2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/KakaoClone-2.jpg"
            imgsrc3="https://myblog6779.s3.ap-northeast-2.amazonaws.com/KakaoClone-3.jpg"
            imgsrc4="https://myblog6779.s3.ap-northeast-2.amazonaws.com/KakaoClone-4.jpg"
            imgsrc5="https://myblog6779.s3.ap-northeast-2.amazonaws.com/KakaoClone-5.jpg"
          />
        </div>
        <div className="flex flex-col  w-1/2 ml-2 space-y-2 max-h-full ">
          <HtmlCssCard />
        </div>
      </div>
      {/* 카드2 */}
      <div
        ref={ref2}
        className={`GradientBox flex w-full items-center h-[400px] sm:h-[350px] p-1 2sm:p-5 sm:px-8 mt-16 rounded-md  transition-all duration-[1s] ${
          isInView2 ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8 "
        }`}
      >
        <div className="flex flex-col items-center w-1/2 p-3 space-y-2 max-h-full relative">
          <LeftCard
            imgCount="3"
            imgsrc1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/JS-1.jpg"
            imgsrc2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/JS-2.jpg"
            imgsrc3="https://myblog6779.s3.ap-northeast-2.amazonaws.com/JS-3.jpg"
          />
        </div>
        <div className="flex flex-col  w-1/2 ml-2 space-y-2 max-h-full ">
          <JsCard />
        </div>
      </div>
      {/* 카드 3 */}
      <div
        ref={ref3}
        className={`GradientBox flex w-full items-center h-[400px] md:h-[400px] lg:h-[350px] p-1 2sm:p-4 sm:px-8 mt-16 rounded-md  transition-all duration-[1s] ${
          isInView3 ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8 "
        }`}
      >
        <div className="flex flex-col items-center w-1/2 p-3 space-y-2 max-h-full relative">
          <LeftCard
            imgCount="8"
            imgsrc1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-1.jpg"
            imgsrc2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-2.jpg"
            imgsrc3="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-3.jpg"
            imgsrc4="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-4.jpg"
            imgsrc5="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-5.jpg"
            imgsrc6="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-6.jpg"
            imgsrc7="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-7.jpg"
            imgsrc8="https://myblog6779.s3.ap-northeast-2.amazonaws.com/React-8.jpg"
          />
        </div>
        <div className="flex flex-col  w-1/2 ml-2 space-y-2 max-h-full ">
          <ReactCard />
        </div>
      </div>
      {/* 카드 4 */}
      <div
        ref={ref4}
        className={`GradientBox flex w-full items-center h-[350px] p-1 2sm:p-5 px-8 mt-16 rounded-md transition-all duration-[1s] ${
          isInView4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center w-1/2 p-3 space-y-2 max-h-full relative">
          <LeftCard
            imgCount="4"
            imgsrc1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/Next-1.jpg"
            imgsrc2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/Next-2.jpg"
            imgsrc3="https://myblog6779.s3.ap-northeast-2.amazonaws.com/Next-3.jpg"
            imgsrc4="https://myblog6779.s3.ap-northeast-2.amazonaws.com/Next-4.jpg"
          />
        </div>
        <div className="flex flex-col  w-1/2 p-2 space-y-2 max-h-full ">
          <NextCard />
        </div>
      </div>
      {/* 카드끝 */}
      <div
        ref={ref5}
        className={`mt-20  rounded-md bg w-full h-[600px] px-10 pt-52 pb-5 transition-all duration-[1s] ${
          isInView5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3
          ref={ref6}
          className={`text-2xl mb-10 transition-all duration-[1s]  ${
            isInView6 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-40"
          }`}
        >
          기타 정보
        </h3>
        <div className="space-y-3">
          <span
            ref={ref7}
            className={`block transition-all duration-[1s]  ${
              isInView7
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-40"
            }`}
          >
            Node.js / express 사용 경험 은 있음 (
            <Link
              href="https://github.com/kiryong159/yclone"
              target="_blank"
              className="text-rose-700 text-bold"
            >
              GitHub
            </Link>
            )
          </span>
          <span
            ref={ref8}
            className={`block transition-all duration-[1s]  ${
              isInView8
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-40"
            }`}
          >
            Fly.io 를 통해 Deploy 했었음. (
            <Link
              href="https://ggrongsyclone.fly.dev/"
              target="_blank"
              className="text-rose-700 text-bold"
            >
              링크
            </Link>
            )
          </span>
          <span
            ref={ref9}
            className={`block transition-all duration-[1s]  ${
              isInView9
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-40"
            }`}
          >
            그냥 길게 보이고 싶음
          </span>
          <span
            ref={ref10}
            className={`block transition-all duration-[1s]  ${
              isInView10
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-40"
            }`}
          >
            아이스 아메리카노 주세요
          </span>
        </div>
        <div className="flex w-full justify-end ">
          <img src="https://myblog6779.s3.ap-northeast-2.amazonaws.com/%EA%B0%90%EC%82%AC%EC%BD%A9.gif" />
        </div>
      </div>
    </>
  );
}

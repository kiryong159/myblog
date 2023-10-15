import Link from "next/link";

export default function NextCard() {
  return (
    <>
      <h1 className="text-2xl">Next JS</h1>
      <ul className="pl-4 leading-relaxed">
        <li>Next Js 시작하기</li>
        <li>Next Js 로 웹서비스 만들기</li>
        <li>
          최종 결과물 : 이 블로그 (
          <Link
            href="https://github.com/kiryong159/myblog"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
      </ul>
    </>
  );
}

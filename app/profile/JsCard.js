import Link from "next/link";

export default function JsCard() {
  return (
    <>
      <h1 className="text-2xl">바닐라 JS 기초</h1>
      <ul className="pl-4 leading-relaxed">
        <li>바닐라 JS로 크롬 앱 만들기</li>
        <li>
          바닐라 JS 2주 완성반 (
          <Link
            href="https://github.com/kiryong159/javac"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
        <li>
          졸업작품 :<p>배운걸 활용해 크롬의 모멘텀 앱 같은걸 만드는 과제.</p>
          <p className=" text-sm text-gray-700 ">
            2주 완성반 우수 졸업 작품 선정. (
            <Link
              href="https://nomadcoders.co/community/thread/6371"
              target="_blank"
              className="text-rose-700 text-bold"
            >
              참조링크
            </Link>
            )
          </p>
        </li>
        <li>
          <Link
            href="https://kiryong159.github.io/javac/"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            졸업 작품 링크
          </Link>
        </li>
      </ul>
    </>
  );
}

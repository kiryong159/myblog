import Link from "next/link";

export default function ReactCard() {
  return (
    <>
      <h1 className=" text-2xl">React</h1>
      <ul className="pl-4 leading-relaxed text-[15px] 2sm:text-[16px]">
        <li>
          React로 영화 웹 서비스 만들기 (
          <Link
            href="https://github.com/kiryong159/reactPractice"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
        <li>
          React 마스터 클래스 (
          <Link
            href="https://github.com/kiryong159/react-master"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
        <li>
          React 2주 완성반 (
          <Link
            href="https://github.com/kiryong159/challnNetHurix"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
        <li>
          졸업작품 :<p>영화 API를 활용해 넷플릭스 클론코딩 해보는 과제 </p>
          <p className=" text-sm text-gray-700 ">
            2주 완성반 우수 졸업 작품 선정. (
            <Link
              href="https://nomadcoders.co/community/thread/7995"
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
            href="https://kiryong159.github.io/challnNetHurix/#/"
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

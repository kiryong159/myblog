import Link from "next/link";

export default function HtmlCssCard() {
  return (
    <>
      <h1 className="text-2xl">HTML , CSS 기초</h1>
      <ul className="pl-4 leading-relaxed text-[15px] 2sm:text-[16px]">
        <li>
          코코아톡 클론코딩 (
          <Link
            href="https://github.com/kiryong159/kokoa-clone"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
        <li>
          코코아 클론 2주 완성반 (
          <Link
            href="https://github.com/kiryong159/co-chall"
            target="_blank"
            className="text-rose-700 text-bold"
          >
            GitHub
          </Link>
          )
        </li>
        <li>
          졸업작품 :
          <p>
            카카오톡 클론코딩 하는 과제 였는데 이미 한번 따라 만들어봤기때문에
            노마드코더 홈페이지를 만들었음
          </p>
        </li>
        <li>
          <Link
            href="https://kiryong159.github.io/co-chall/home.html"
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

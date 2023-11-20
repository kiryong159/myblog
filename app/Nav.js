import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogInBtn from "@/util/LogInBtn";
import LogOutBtn from "@/util/LogOutBtn";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Category from "./category";
import Search from "./search";
import ThemeBtn from "./ThemeBtn";
import { cookies } from "next/headers";
import HomeBtn from "./HomeBtn";
import Info from "./Info";
import Menu from "./Menu";
import VisitorCounter from "./VisitorCounter";

export default async function Nav({ child }) {
  let session = await getServerSession(authOptions);
  let admin = session
    ? session.user.name === "박기룡" ||
      session.user.name === "kiryong" ||
      session.user.email === "kiryong159@naver.com" ||
      session.user.email === "kiryong1599@daum.net"
    : false;
  let cookie = cookies().get("isDark");
  let isDark =
    cookie !== undefined ? (cookie.value === "true" ? true : false) : "no";
  let visited = cookies().has("visited");
  /*   let visited = visitedCookie !== undefined ? true : false; */

  return (
    <div
      className={`flex flex-col  w-[100vw]   fixed top-0 left-0 right-0  h-full NavScrollBar overflow-x-hidden ${
        isDark === true ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div
        className={`fixed z-10 top-0 flex justify-between items-center shadow-md rounded-md rounded-t-none  h-[70px] w-[100%] xl:w-[81.5%]  p-4  3sm:px-10 left-0 xl:left-[9%] ${
          isDark === true ? "bg-gray-500 text-gray-100" : "bg-white"
        }`}
      >
        <div className="flex space-x-3 ">
          <Link href={"/"}>
            <HomeBtn />
          </Link>
          <div className="flex justify-center items-center">
            {/* space x-3을 피하기위한 div */}
            <Menu isDark={isDark} session={session} admin={admin} />
          </div>

          {admin ? (
            <Link href="/write" className="hidden 2sm:flex items-center">
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
          {session ? (
            <LogOutBtn defaultView={false} />
          ) : (
            <LogInBtn defaultView={false} />
          )}
          <ThemeBtn isDark={isDark} />
        </div>
        <Search isDark={isDark} />
      </div>
      <div className="relative left-0 md:left-[2%] xl:left-[10%] flex mt-[75px]  ">
        <div
          className={`hidden md:flex md:w-1/6  xl:w-1/5 ${
            isDark === true ? "bg-gray-700 text-white" : "bg-white"
          }`}
        >
          <div className="fixed md:w-1/6 xl:w-1/5">
            <Info isDark={isDark} />
            <div className="border-b border-gray-400  border-solid m-1" />
            <Category isDark={isDark} />
            <div className="border-b border-gray-400  border-solid m-1" />
            <VisitorCounter isDark={isDark} visited={visited} />
          </div>
        </div>
        <div
          className={`w-full md:w-[79%] xl:w-3/5  rounded-md  shadow-md ${
            isDark === true ? "bg-gray-500" : "bg-white"
          }`}
        >
          {child}
        </div>
      </div>
    </div>
  );
}

//relative left-[10%] 때문에 overflow-x-hidden 달아줬음 ..

/*  구글 세션 정보 {
  user: {
    name: '박기룡',
    email: 'kiryong159@gmail.com',
    image: 'https://lh3.googleusercontent.com/a/AAcHTtcib0kyShhWpf6jpC1eK0NXoimnZs2skWeFJMI4JTGs=s96-c'
  }
}
{깃헙 세션 정보 
  user: {
    name: 'kiryong',
    email: 'kiryong159@naver.com',
    image: 'https://avatars.githubusercontent.com/u/116635003?v=4'
  }
}
{디스코드 세션 정보
  user: {
    name: 'RIMNIL',
    email: 'kiryong159@naver.com',
    image: 'https://cdn.discordapp.com/avatars/261091305105522689/b5769a5e9a172f8fc1b9f0debf51ce87.png'
  }
} 
{카카오 세션 정보
  user: {
    name: '기룡',
    email: 'kiryong1599@daum.net',
    image: 'http://k.kakaocdn.net/dn/kLfO3/btrKZ1U5J2j/YhSYxkQbEKpaAnfkZVhXQ0/img_640x640.jpg'
  }
}
{ 네이버 세션정보
  user: {
    name: '구렁'(별명이 표기됨),
    email: 'kiryong159@naver.com',
    image: 'https://phinf.pstatic.net/contact/profile/blog/78/14/kiryong159.jpg'
  }
}
 */

/* div 원문




*/

/*  grid 연습
    <div
      className={`NavGrid NavScrollBar overflow-x-hidden ${
        isDark === true ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="a" />
      <div
        className={`nav flex items-center space-x-2 px-10 shadow-md rounded-md  ${
          isDark === true ? "bg-gray-500 text-gray-100" : "bg-white"
        }`}
      >
        <Link href={"/"}>
          <HomeBtn />
        </Link>
        {session ? <LogOutBtn /> : <LogInBtn />}
        {admin ? (
          <Link href="/write" className="flex items-center">
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
        <ThemeBtn isDark={isDark} />
        <Search isDark={isDark} />
      </div>
      <div className="b" />
      <div className="a" />
      <div
        className={` cate  mt-3 ${
          isDark === true ? "bg-gray-700 text-white" : "bg-white"
        }`}
      >
        <div className="">
          <Info />
          <div className="border-b border-gray-400  border-solid m-1" />
          <Category />
        </div>
      </div>
      <div
        className={`post mt-3 mx-1 rounded-md  shadow-md ${
          isDark === true ? "bg-gray-500" : "bg-white"
        }`}
      >
        {child}
      </div>
      <div className="b" />
    </div>
*/

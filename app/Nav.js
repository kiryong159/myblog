import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogInBtn from "@/util/LogInBtn";
import LogOutBtn from "@/util/LogOutBtn";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Category from "./category";
import Search from "./search";
import ThemeBtn from "./ThemeBtn";
import { cookies } from "next/headers";
export default async function Nav({ child }) {
  let session = await getServerSession(authOptions);
  let admin = session
    ? session.user.name === "박기룡" ||
      session.user.name === "kiryong" ||
      session.user.email === "kiryong159@naver.com"
    : false;
  let cookie = cookies().get("isDark");
  let isDark =
    cookie !== undefined ? (cookie.value === "true" ? true : false) : "no";
  return (
    <div
      className={`flex flex-col  w-[100vw]   fixed top-0 left-0 right-0  h-full NavScrollBar overflow-x-hidden ${
        isDark === true ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div
        className={`fixed z-10 top-0 flex items-center shadow-md rounded-md  h-[70px] w-[81.5%]  p-4 px-10  space-x-3 left-[9%] ${
          isDark === true ? "bg-gray-500 text-gray-100" : "bg-white"
        }`}
      >
        <Link href={"/"}>
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
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
      <div className="relative left-[10%] flex mt-[75px]  ">
        <div
          className={`  w-1/5 ${
            isDark === true ? "bg-gray-700 text-white" : "bg-white"
          }`}
        >
          <div className="fixed w-1/5">
            <div className="h-40 bg-yellow-500 rounded-md">프로필</div>
            <div className="border-b border-gray-400  border-solid m-1" />
            <Category />
          </div>
        </div>
        <div
          className={`w-3/5  rounded-md  shadow-md ${
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
} */

/* 깃헙 세션 정보  {
  user: {
    name: 'kiryong',
    email: 'kiryong159@naver.com',
    image: 'https://avatars.githubusercontent.com/u/116635003?v=4'
  }
} */

/* 디스코드 세션 정보
{
  user: {
    name: 'RIMNIL',
    email: 'kiryong159@naver.com',
    image: 'https://cdn.discordapp.com/avatars/261091305105522689/b5769a5e9a172f8fc1b9f0debf51ce87.png'
  }
}
*/

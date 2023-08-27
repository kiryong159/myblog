import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogInBtn from "@/util/LogInBtn";
import LogOutBtn from "@/util/LogOutBtn";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Category from "./category";
import Search from "./search";

export default async function Nav({ child }) {
  let session = await getServerSession(authOptions);
  let admin = session
    ? session.user.name === "박기룡" || session.user.name === "kiryong"
    : false;
  return (
    <div className=" flex flex-col  w-[100vw]  bg-white fixed top-0 left-0 right-0  h-full NavScrollBar overflow-x-hidden">
      <div className="fixed z-10 top-0 flex items-center shadow-md rounded-md bg-white h-[70px] w-[81.5%]  p-4 px-10  space-x-3 left-[9%]">
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
        <Search />
      </div>
      <div className="relative left-[10%] flex mt-[75px]  ">
        <div className=" bg-gray-100 w-1/5   ">
          <div className="fixed ">
            <div className=" h-40">프로필</div>
            <Category />
          </div>
        </div>
        <div className="w-3/5 bg-white rounded-md shadow-md ">{child}</div>
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

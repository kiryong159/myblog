import { cookies } from "next/headers";
import HomeBox from "../homeBox";

export default function CreateTool() {
  let cookie = cookies().get("isDark");
  const isDark = cookie ? (cookie.value === true ? true : false) : false;

  return (
    <div className="w-full flex flex-col space-y-3  p-5 max-h-[670px] h-[670px]">
      <h3
        className={`p-1 text-center font-medium text-xl ${
          isDark ? "text-gray-100" : ""
        }`}
      >
        제작 도움
      </h3>
      <div className="w-full max-h-[520px] h-full flex flex-col space-y-5">
        <HomeBox
          isDark={isDark}
          name1="NEXT.js"
          name2="Tailwind CSS"
          src1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/NextJS.svg"
          src2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/tailwind.svg"
          link1="https://nextjs.org/docs"
          link2="https://tailwindcss.com/docs/installation"
        />
        <HomeBox
          isDark={isDark}
          name1="MongoDB"
          name2="Chat GPT"
          src1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/MongoDB.svg"
          src2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/Chat+GPT.svg"
          link1="https://www.mongodb.com/ko-kr"
          link2="https://chat.openai.com/"
        />
        <HomeBox
          isDark={isDark}
          name1="Google"
          name2="AWS S3"
          src1="https://myblog6779.s3.ap-northeast-2.amazonaws.com/Google.svg"
          src2="https://myblog6779.s3.ap-northeast-2.amazonaws.com/AWS.svg"
          link1="https://www.google.co.kr/"
          link2="https://s3.console.aws.amazon.com/"
        />
      </div>
    </div>
  );
}

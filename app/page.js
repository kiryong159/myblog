import { cookies } from "next/headers";
import Link from "next/link";
import HomeBox from "./homeBox";

export default function Home() {
  let cookie = cookies().get("isDark");
  const isDark =
    cookie !== undefined ? (cookie.value === "true" ? true : false) : false;

  return (
    <div className="w-full flex flex-col space-y-3  p-5 max-h-[670px] h-[670px]">
      <h1
        className={`p-1 font-bold text-center text-3xl ${
          isDark ? "text-gray-100" : ""
        }`}
      >
        HOME
      </h1>
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

// 포럼 -> 카테고리 -> 1,2,3,4

//글작성 - > 카테고리 설정 -> 글 db에 카테고리 저장

//list/아무개 -> 없는페이지 error.js

//글이 가지고 있어야 할것  { 카테고리 , 제목 , 내용 , 작성시간, 작성자 } (ok)

// 글쓰기 공백차단 post요청체크 ( ok )

//글삭제시 댓글삭제 (ok)

//edit같은거에 애니메이션 넣어보기 (ok) // search에도 넣으면될듯(ok).
//edit layout만들기(글 높이 문제 no)

//글목록 페이지 제작해보기(ok)
// state에 math.ceil(list.length/offset)  page index
// 페이지 만들기 / list.slice(offset*index,offset*index+offset)

//댓글 수정,삭제시 세션 주인 확인 (ok)

//댓글 없을때 css(ok)

//검색 -> 이름으로 검색 / 내용으로 검색 (ok)

//홈 css (ok)

// 카테고리 조지기 or 애니메이션 (ok)

// 사진 (s3 프리사인으로 업로드해서 등록만해도 업로드 되버림.)
//스토리지  삭제관련 ( 글삭제시(OK)  / 취소시 삭제있는가? )

//dark mode -> 왜 2개지급되는가??? -> useEFFECT에 (()=>{},[]) 중 []가 없었음
//추후 사이즈 조절

//.count 수정해야할듯?(ok)

/* 
오버레이 z40 서치 z50 에딧 z30
제일 외곽  bg-gray700
nav bg-gray 500 
글박스 bg-gray-400  hover:bg-gray-300  group
카테고리,날자 bg-gray-100  group-hover:text-gray-600
페이지버튼 bg-gray-400 hover-text:gray-700 hover-bg-gray-300
홈 -> 기본 200 다크 300 
*/

//글에 markdwon 추가해보기

//프로필 ->이수한것들 적엉

//nav에 사용자 표시

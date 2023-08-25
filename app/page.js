import HomeBox from "@/util/homeBox";

export default function Home() {
  return (
    <div className="w-full flex flex-col space-y-3  p-5 max-h-[670px] h-[670px]">
      <h1 className="p-1 font-bold text-center text-3xl"> HOME</h1>
      <h3 className="p-1 text-center font-medium text-xl ">제작 도움</h3>
      <div className="flex flex-col space-y-3 items-center">
        <div className="flex items-center  space-x-3 w-full h-[150px]">
          <HomeBox name="asdf" />
          <HomeBox name="asdsads" />
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full h-[150px]">
        <HomeBox name="ne4xtjs" />
        <HomeBox name="nextjs" />
      </div>
      <div className="flex items-center  space-x-3 w-full h-[150px]">
        <HomeBox name="5" />
        <HomeBox name="nextjs" />
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

//댓글 수정,삭제시 세션 주인 확인

//댓글 없을때 css(ok)

//검색 -> 이름으로 검색 / 내용으로 검색 (ok)

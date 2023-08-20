export default function Home() {
  return (
    <div className="w-full  ">
      <div className="bg-red-300">
        <h1>home</h1>
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

//edit같은거에 애니메이션 넣어보기 (ok) // search에도 넣으면될듯.

//글목록 페이지 제작해보기? - 보류
// 페이지 만들기 / list.slice(offset*index,offset*index+offset)
// state에 math.ceil(list.length/offset)  page 최대갯수

//댓글 수정,삭제시 세션 주인 확인

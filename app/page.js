import HomeBox from "./homeBox";

export default function Home() {
  return (
    <div className="w-full flex flex-col space-y-3  p-5 max-h-[670px] h-[670px]">
      <h1 className="p-1 font-bold text-center text-3xl"> HOME</h1>
      <h3 className="p-1 text-center font-medium text-xl ">제작 도움</h3>
      <div className="w-full max-h-[520px] h-full flex flex-col space-y-5">
        <HomeBox
          name1="NEXT.js"
          name2="Tailwind CSS"
          src1="https://i.namu.wiki/i/benNL9a8dR2OJgB-k4Dy7my7QKXO705Gt7bVk_chopoiAVwo5TTRprag2AbPQiH-uKREqi3euzMDpc8kHdtJKDV74y-RiklWytJyHCu5loVFmNtZIYNjEtAyv8_cSvvQuge0xmIA9797L8L28Q1QWg.svg"
          src2="https://i.namu.wiki/i/Cz_00edwUtX87JieMgxVbsxX1WFBGtmq2Td9nKt9uFNMZ71_VGJen03fucR96_3AbF-ceNE-3VefwJkMI35oyMcpmOHCFECjfFb8RA5SoyhcjQKx-NdP1qOzc-Ef1O1qaA3CZUeKz_nn8jSet3oH_g.svg"
          link1="https://nextjs.org/docs"
          link2="https://tailwindcss.com/docs/installation"
        />
        <HomeBox
          name1="MongoDB"
          name2="Chat GPT"
          src1="https://i.namu.wiki/i/xNULUQxFHCzb-N4HSyhd0KkTvsDOm5DAwwNhiN3YiWPEgJQetZdM95WPb_QBwNEowKhiCtst50h3OU7i1hLTqSy0DSE1OY_ADAM2OiPMzwuN3TdyxrKUf1zwM5OE6_53sLnCPYcCJEInhOiys_Vg1Q.svg"
          src2="https://i.namu.wiki/i/2ASsR6beN06tqHTAnYl71itY5VZ9UUHGBtWLuXgZB2JHPTksS5-Awd1qNRGD6qxuHU5nJ12z1tggrC8CuiQitSc4_86rl-_DVBRQizBK1ll0K7FBGlg7DUZegiWDtOneq70SsKmw4IKvs7prFdDGzw.svg"
          link1="https://www.mongodb.com/ko-kr"
          link2="https://chat.openai.com/"
        />
        <HomeBox
          name1="Google"
          name2="치킨 맛있음"
          src1="https://i.namu.wiki/i/m2eT5RqpjVLwVJQuR_0khbHtRP77sNCMAP8IsN4q2sMC01bO-Cv3cjXrrF0hbxrg5RpVUP8tGUuYyUdfPlPgMmlEYBR1k3BBzY-uAgdQJZtPkCh6dMSWDvQkdfsNz1Y3MQFhC5REt4ac7aFe5Kg5cg.svg"
          src2="https://i.namu.wiki/i/Kwa4njW0LBARFyawuwr8GUe3htnyqlk_aHqAMoMR4GWw52hI4uB0SseSQlCvIbLHtpSqqTrykMda4qlGiojaW5tVwaNqgGFVJpM0bixQS88SuwxXI6JCqilrYLztq7Rr3Zx9nDNCPZkf2Ow_N9mSaA.webp"
          link1="https://www.google.co.kr/"
          link2="https://namu.wiki/w/%EC%B9%98%ED%82%A8"
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

// 사진 ? 스토리지 ?

//dark mode
//추후 사이즈 조절

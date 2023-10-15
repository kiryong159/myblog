import { NextResponse } from "next/server";

export async function middleware(request) {
  /*   const has = request.cookies.has("visited");
  if (has) {
    return NextResponse.next();
  } else {
    await fetch("/pages/api/visit", { method: "POST" });
    const response = NextResponse.next();
    response.cookies.set({
      name: "visited",
      value: "1",
      maxAge: 84600,
      httpOnly: true,
    });
    return response;
  } */
}

/*
fetch왜안되 ㅅㅂ
 request.cookies.get("쿠키이름")  출력 
 request.cookies.has("쿠키이름") 존재 확인
 request.cookies.delete("쿠키이름") 삭제

 const response = NextResponse.next()
  response.cookies.set({
    name: 'mode',
    value: 'dark',
    maxAge: 3600,
    httpOnly : true
  })  
   return response 쿠키 생성
   
   
*/

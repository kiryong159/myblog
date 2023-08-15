import Category from "./category";

export default function Nav({ child }) {
  return (
    <>
      <div className="flex flex-col max-w-5xl  w-full bg-gray-300 fixed top-0 left-0 right-0 mx-auto">
        <div className="flex  bg-blue-200 w-full  p-5 px-10  space-x-3">
          <span>블로그이름(홈버튼)</span>
          <span>검색?</span>
          <span>로그인</span>
        </div>
        <div className="flex">
          <div className="relative left-0 bg-yellow-300 w-1/4 ">
            <div>
              <div className="h-40">프로필</div>
              <Category />
            </div>
          </div>
          <div className="w-3/4 bg-orange-500">{child}</div>
        </div>
      </div>
    </>
  );
}

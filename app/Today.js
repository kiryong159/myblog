// 홈화면 제일 위 인사
export default function ToDay({ isDark }) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const 요일 = days[date.getDay()];
  return (
    <div
      className={`HomeA p-3 5sm:grid 5sm:grid-rows-2 lg:flex text-center items-center justify-center text-[17px] 4sm:text-[19px] 3sm:text-[19px] 2sm:text-[25px] sm:text-3xl md:text-[28px] lg:text-[35px] xl:text-4xl font-bold  ${
        isDark ? "text-white" : ""
      }`}
    >
      <span> 안녕하세요.</span>
      <span>
        오늘은 {month}월 {day}일({요일}) 입니다.
      </span>
    </div>
  );
}

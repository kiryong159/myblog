/* export default function formattedDate(postAt) {
  return new Date(postAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
 */

export default function formattedDate(postAt) {
  const date = new Date(postAt);
  const year = date.getUTCFullYear(); // newDate를하면 주어진값을 로컬값으로 바꾸기때문에 utc로 불러와야함
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리 숫자로 만듦
  const day = String(date.getUTCDate()).padStart(2, "0"); // 날짜도 2자리 숫자로 만듦
  return `${year}/${month}/${day}`;
}

/* export default function formattedDate(postAt) {
  console.log("포스트엣", postAt);
  const date = new Date(postAt);
  console.log("데이트", date);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formatted = date.toLocaleString("ko-KR", options);

  return formatted;
}
 */

//.padStart 는 자리수 맞춰주는 기능 (몇자리수? , "채울내용" )
//"abc".padStart(10, "foo"); // "foofoofabc"
//"abc".padStart(8, "0"); // "00000abc"

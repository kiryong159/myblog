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

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리 숫자로 만듦
  const day = String(date.getDate()).padStart(2, "0"); // 날짜도 2자리 숫자로 만듦

  return `${year}/${month}/${day}`;
}

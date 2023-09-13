import { cookies } from "next/headers";

export default function MainLoading() {
  const cookie = cookies().get("isDark");
  const isDark =
    cookie !== undefined ? (cookie.value === "true" ? true : false) : false;
  return (
    <div className="p-3 flex flex-col justify-center items-center h-96">
      <span
        className={`loader inline-block box-border w-20 h-20  rounded-full border-r-[3px] border-r-transparent border-t-[3px] border-solid 
        ${isDark ? "border-white" : "border-black"}`}
      ></span>
      <span
        className={`text-sm relative top-[-50px] font-bold ${
          isDark ? "text-gray-100" : "text-black"
        }`}
      >
        Loading...
      </span>
    </div>
  );
}

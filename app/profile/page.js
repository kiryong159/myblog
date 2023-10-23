import { cookies } from "next/headers";

import ProfileDetail from "./ProfileDetail";

// 프로필 페이지 쿠키 설정

export default function Profile() {
  let cookie = cookies().get("isDark");
  let isDark =
    cookie !== undefined ? (cookie.value === "true" ? true : false) : false;
  return (
    <div className="w-full p-5 ">
      <ProfileDetail isDark={isDark} />
    </div>
  );
}

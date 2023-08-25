"use client";
import { signOut } from "next-auth/react";
export default function LogOutBtn() {
  const onClick = () => {
    signOut();
  };

  return <button onClick={onClick}>로그아웃</button>;
}

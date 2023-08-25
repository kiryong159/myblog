"use client";
import { signIn } from "next-auth/react";
export default function LogInBtn() {
  const onClick = () => {
    signIn();
  };

  return <button onClick={onClick}>로그인</button>;
}

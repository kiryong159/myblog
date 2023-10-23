"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 방문자 쿠키 확인후 ok-> 통과 / no-> 쿠키생성(1일) 후 fetch

export default function VisitorCounterClient({ visited }) {
  const router = useRouter();
  useEffect(() => {
    if (visited) {
      return router.refresh();
    } else if (!visited && visited !== undefined) {
      async function fetchVisited() {
        await fetch("/api/visit", { method: "POST" }).then((r) => r.json());
      }
      document.cookie = "visited=true; path=/; max-age=86400";
      fetchVisited();
      router.refresh();
    }
  }, []);
}

/*  use effect에서 async쓰기
useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

*/

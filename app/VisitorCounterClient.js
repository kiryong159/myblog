"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VisitorCounterClient({ visited }) {
  const router = useRouter();
  useEffect(() => {
    if (visited) {
      return router.refresh();
    } else if (visited !== undefined) {
      async function fetchVisited() {
        await fetch("/api/visit", { method: "POST" });
      }
      document.cookie = "visited=true; max-age=84600";
      fetchVisited();
      return router.refresh();
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

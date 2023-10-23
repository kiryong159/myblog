import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
var cron = require("node-cron");
import VisitorCounterClient from "./VisitorCounterClient";

// 방문자 db 카운트 올리는 함수  및 cron으로 매일 자정 today 카운트 0으로 만드는 함수 실행시킴

export default async function VisitorCounter({ isDark, visited }) {
  const db = (await connectDB).db("blog");
  let TodayCounter = await db
    .collection("visit")
    .findOne({ _id: new ObjectId("652a0ca7b7ad404412898ce5") });
  let TotalCounter = await db
    .collection("visit")
    .findOne({ _id: new ObjectId("652a0cb9b7ad404412898ce6") });

  const resetToday = async () => {
    let TodayReset = await db.collection("visit").updateOne(
      { _id: new ObjectId("652a0ca7b7ad404412898ce5") },
      {
        $set: { today: 0 },
      }
    );
  };

  cron.schedule("0 0 * * *", resetToday);
  return (
    <>
      <VisitorCounterClient visited={visited} />
      <div
        className={`w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[65%]  h-[65px] flex items-start justify-center p-3 flex-col space-y-2  rounded-md shadow-md  mx-auto font-bold text-[11px] lg:text-[13px] mt-4 ${
          isDark ? "bg-gray-400" : "bg-purple-50"
        }`}
      >
        {/* 여기 수정하면 Menu에서도 수정 해줘야함 */}
        <div className="space-x-2">
          <span>Today :</span>
          <span>{TodayCounter ? TodayCounter.today : 0}</span>
        </div>
        <div className="space-x-2">
          <span>Total :</span>
          <span>{TotalCounter ? TotalCounter.total : 0}</span>
        </div>
      </div>
    </>
  );
}

/* 
cron 
https://www.npmjs.com/package/node-cron





 */

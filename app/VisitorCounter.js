import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
var cron = require("node-cron");
import VisitorCounterClient from "./VisitorCounterClient";

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
        <div className="space-x-2">
          <span>Today :</span>
          <span>{TodayCounter.today}12356</span>
        </div>
        <div className="space-x-2">
          <span>Total :</span>
          <span>{TotalCounter.total}123456</span>
        </div>
      </div>
    </>
  );
}

/* 
cron 
https://www.npmjs.com/package/node-cron





 */

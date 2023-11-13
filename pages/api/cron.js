export default async function resetToday(req, res) {
  let TodayReset = await db.collection("visit").updateOne(
    { _id: new ObjectId("652a0ca7b7ad404412898ce5") },
    {
      $set: { today: 0 },
    }
  );
  return res.status(200).json("ok");
}

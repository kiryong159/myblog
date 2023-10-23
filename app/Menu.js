import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import MenuClient from "./MenuClinet";

//화면 768이하 에서 생기는 메뉴 에 필요한 DB정보

export default async function Menu({ isDark, session, admin }) {
  const db = (await connectDB).db("blog");
  let category = await db.collection("category").find().toArray();
  const AllpostCount = await db.collection("post").countDocuments();

  category = category.map((item) => {
    return item.category;
  });

  let postCount = await Promise.all(
    category.map(async (item) => {
      let count = await db
        .collection("post")
        .countDocuments({ category: item });
      return { [item]: count };
    })
  );

  postCount.find((item) => "All" in item)["All"] = AllpostCount;

  let TodayCount = await db
    .collection("visit")
    .findOne({ _id: new ObjectId("652a0ca7b7ad404412898ce5") });

  let TotalCount = await db
    .collection("visit")
    .findOne({ _id: new ObjectId("652a0cb9b7ad404412898ce6") });

  return (
    <>
      <MenuClient
        session={session}
        admin={admin}
        postCount={postCount}
        isDark={isDark}
        TodayCount={TodayCount.today}
        TotalCount={TotalCount.total}
      />
    </>
  );
}

/* 
in 연산자는 객체 내에 특정 속성(프로퍼티)이 있는지 여부를 확인하기 위해 사용됩니다. 
이 연산자는 객체의 프로퍼티를 확인하는 데 주로 사용됩니다.
예를 들어, 객체가 특정 프로퍼티를 가지고 있는지 확인하거나 객체의 프로퍼티를 반복하는 데 in 연산자를 사용할 수 있습니다.
예제: 객체의 프로퍼티 확인

const person = { name: 'Alice', age: 30 };
const hasName = 'name' in person;
console.log(hasName); // true

*/

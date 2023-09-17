import { MongoClient } from "mongodb";

let cachedDb = null;

export async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }
  const url =
    "mongodb+srv://admin:1q2w3e4r@myblog.zqxpruc.mongodb.net/?retryWrites=true&w=majority";
  const options = { useNewUrlParser: true };
  const client = new MongoClient(url, options);
  try {
    await client.connect();
    console.log("MongoDB에 연결되었습니다.");
    const db = await client.db("blog"); // 원하는 데이터베이스 선택
    cachedDb = db; // 연결 객체를 캐시
    return db;
  } catch (error) {
    console.error("MongoDB 연결 오류:", error);
    throw error;
  }
}

/* let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB }; */

/* 
const url =
  "mongodb+srv://admin:1q2w3e4r@myblog.zqxpruc.mongodb.net/?retryWrites=true&w=majority";
let connectDB = new MongoClient(url).connect();
export { connectDB };
 */

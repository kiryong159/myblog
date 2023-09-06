import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Credentials } from "aws-sdk";

const credentials = new Credentials({
  accessKeyId: process.env.AWS_S3_ID,
  secretAccessKey: process.env.AWS_S3_PW,
});

const s3client = new S3Client({
  credentials: credentials,
  region: "ap-northeast-2",
  signatureVersion: "v4",
});

export const s3DeleteHandler = async (fileName) => {
  const command = new DeleteObjectCommand({
    Bucket: "myblog6779",
    Key: fileName,
  });

  try {
    const response = await s3client.send(command);
    console.log("s3Delete Photo -> ok");
  } catch (err) {
    console.error("에러", err);
  }
};

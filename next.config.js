/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.namu.wiki",
      "s3.ap-northeast-2.amazonaws.com",
      "openweathermap.org",
    ], // 이미지 호스트명 추가
  },
};

module.exports = nextConfig;

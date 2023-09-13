export default function apitest(req, res) {
  req.body = JSON.parse(req.body);
  console.log("테스트 리퀘바디", req.body);
  return res.status(200);
}

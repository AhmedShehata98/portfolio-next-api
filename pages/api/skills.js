export default function handler(res, req) {
  if (req.method === "GET") {
    res.status(200).json(skillsList);
  }
}

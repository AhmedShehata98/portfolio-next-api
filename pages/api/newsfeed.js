import { newsFeed } from "../../ApiData/newsFeed";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(newsFeed);
  }
}

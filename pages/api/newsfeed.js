import { newsFeed } from "../../ApiData/newsFeed";
const handler = (res, req) => {
  if (req?.method === "GET") {
    res.status(200).json(newsFeed);
  }
};
export default handler;

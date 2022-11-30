import { contactData } from "../../ApiData/portfolioData";
const handler = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(contactData);
  }

  if (req.method === "POST") {
    res.status(200).json(res.body);
    console.log(res.body);
  }
};

export default handler;

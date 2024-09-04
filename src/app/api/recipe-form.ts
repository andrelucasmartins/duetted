import { NextApiRequest, NextApiResponse } from "next";

export default function handler( req: NextApiRequest,
  res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const { username, recipe_title, recipe_ingredients } = req.body;


    res.status(200).json({ message: "Dados recebidos com sucesso!", data: { username, recipe_title, recipe_ingredients} });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}

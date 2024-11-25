import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest,
  res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    const { title, image, time, recipe_yield, ingredients, preparation_method, tips, category_id } = req.body;


    res.status(200).json({ message: "Dados recebidos com sucesso!", data: { title, image, time, recipe_yield, ingredients, preparation_method, tips, category_id } });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}

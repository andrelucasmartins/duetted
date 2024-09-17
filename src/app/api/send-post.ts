import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === 'POST') {
  const response = await fetch('https://webhook.site/3c0b38e8-a544-4eea-9978-9d80d770fc76', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();
  res.status(200).json(data);
} else {
  res.status(405).json({ message: 'Método não permitido' });
}
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default (req:any, res:any) => {
  const { query: { meta_title } } = req;

  // Your logic to generate the API response based on the meta_title query parameter
  const response = {
    message: 'API response',
    metaTitle: meta_title,
  };

  res.status(200).json(response);
};
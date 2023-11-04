// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Amplify, withSSRContext } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next';

import { awsConfig } from '../../src/config/aws-export';

Amplify.configure({ ...awsConfig, ssr: true });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    res.json({ user });
  } catch (error) {
    res.json({ error });
  }
}

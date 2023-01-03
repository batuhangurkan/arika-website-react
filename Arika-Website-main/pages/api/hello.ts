import type { NextApiRequest, NextApiResponse } from 'next';

export default function Hello(req: NextApiRequest, res: NextApiResponse) {
    res.json({
        message : 'Hello Iam Arika! :)',
        developer: 'Scréw',
        version: '1.0.0'

    });
};
import type { NextApiRequest, NextApiResponse } from 'next'
import connection from '@/config/db';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query
    connection.query(
        'SELECT * FROM `jobs` WHERE `id` =?', [id],
        function (err: any, results: any) {
            res.status(200).json(results)
        }
    );

}
import connection from '@/config/db';
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connection.query(
        'SELECT j.id, j.name, j.detail, c.id ,c.name as comp_name, c.logo FROM jobs j, companies c WHERE j.comp_id = c.id',
        function (err: any, results: any) {
            res.status(200).json(results)
        }
    );
}
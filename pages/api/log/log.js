import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    console.log(req);
    return res.status(200).json(req.body);
}
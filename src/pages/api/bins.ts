import type {NextApiRequest, NextApiResponse} from 'next'
import {binServiceFactory} from '../../bins/bins.service'

const binsService = binServiceFactory()

// todo: create controller class
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405)
    res.send(`${req.method} not implemented`)
    return
  }
  const url = new URL(req.url)
  if (url.searchParams.has('m')) {
    res.status(405)
    res.send('Not yet implemented by month')
    return
  }

  res.json(binsService.findAll())

}

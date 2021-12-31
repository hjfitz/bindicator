import type {NextApiRequest, NextApiResponse} from 'next'
import BinsFactory from 'bins/bins.factory'

const binsService = BinsFactory.getService()

// todo: create controller class
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405)
    res.send(`${req.method} not implemented`)
    return
  }
  if (Object.keys(req.query).length >= 1) {
    res.status(405)
    res.send('Not yet implemented params')
    return
  }

  res.json(binsService.findAll())

}

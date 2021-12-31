import BinsFactory from 'bins/bins.factory'
import type {NextApiRequest, NextApiResponse} from 'next'

const binsService = BinsFactory.getService()

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.json(binsService.findNext())
}

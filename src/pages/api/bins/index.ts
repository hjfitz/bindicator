import type {NextApiRequest, NextApiResponse} from 'next'
import BinsFactory from 'bins/bins.factory'

const binsController = BinsFactory.getController()

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return binsController.getAll(req, res)
}

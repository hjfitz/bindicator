import BinsFactory from 'bins/bins.factory'
import type {NextApiRequest, NextApiResponse} from 'next'

const binsController = BinsFactory.getController()

export default function handleGetNext(req: NextApiRequest, res: NextApiResponse) {
  binsController.getNext(req, res)
}

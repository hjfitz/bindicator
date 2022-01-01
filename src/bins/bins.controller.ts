import {NextApiRequest, NextApiResponse} from "next"
import type BinsService from 'bins/bins.service'
import {Get} from 'http/http.decorators'

export default class BinsController {
	constructor(private readonly binsService: BinsService) {}

	@Get()
	getNext(req: NextApiRequest, res: NextApiResponse) {
		if (req.method !== 'GET') {
			res.status(405).send('Method not implemented')
			return
		}
		res.json(this.binsService.findNext())
	}

	@Get()
	getAll(req: NextApiRequest, res: NextApiResponse) {
		if (req.method !== 'GET') {
			res.status(405).send('Method not implemented')
			return
		}
		res.json(this.binsService.findAll())
	}
}


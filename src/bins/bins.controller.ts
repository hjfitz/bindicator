import type {NextApiRequest, NextApiResponse} from "next"
import type BinsService from 'bins/bins.service'
import type {InitialisedBinCollection} from "./bins.types"
import {Get} from 'http/http.decorators'

export default class BinsController {
	constructor(private readonly binsService: BinsService) {}

	@Get()
	getNext(_: NextApiRequest, res: NextApiResponse<InitialisedBinCollection>) {
		res.json(this.binsService.findNext())
	}

	@Get()
	getAll(_: NextApiRequest, res: NextApiResponse<InitialisedBinCollection[]>) {
		res.json(this.binsService.findAll())
	}
}


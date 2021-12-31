import {NextApiRequest, NextApiResponse} from "next";
import type BinsService from './bins.service'

export default class BinsController {
	constructor(private readonly binsService: BinsService) {}

	getNext(req: NextApiRequest, res: NextApiResponse) {}

	getAll(req: NextApiRequest, res: NextApiResponse) {}
}


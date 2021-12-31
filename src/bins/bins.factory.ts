import BinsController from './bins.controller'
import BinsService from './bins.service'
import BinsRepository from './bins.repository'

export default class BinsFactory {
	private static binsService: BinsService
	private static binsController: BinsController
	private static binsRepository: BinsRepository

	private static getRepository(): BinsRepository {
		if (!BinsFactory.binsRepository) {
			const repo = new BinsRepository()
			BinsFactory.binsRepository = repo
		}
		return BinsFactory.binsRepository
	}

	public static getService(): BinsService {
		if (!BinsFactory.binsService) {
			const repository = BinsFactory.getRepository()
			const service = new BinsService(repository)
			BinsFactory.binsService = service
		}
		return BinsFactory.binsService
	}

	public static getController(): BinsController {
		if (!BinsFactory.binsController) {
			const service = BinsFactory.getService()
			const controller = new BinsController(service)
			BinsFactory.binsController = controller
		}
		return BinsFactory.binsController
	}
}

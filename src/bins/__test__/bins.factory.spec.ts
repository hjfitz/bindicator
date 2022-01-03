import BinsFactory from 'bins/bins.factory'
import BinsRepository from 'bins/bins.repository'
import BinsController from 'bins/bins.controller'
import BinsService from 'bins/bins.service'

describe('BinsFactory', () => {
	// basic dep injection tests
	beforeEach(() => {
		BinsFactory.binsService = undefined
		BinsFactory.binsController = undefined
		BinsFactory.binsRepository = undefined
	})
	describe('getRepository', () => {
		it('should instantiate BinsFactory.binsRepository', () => {
			const repo = BinsFactory.getRepository()
			expect(repo).toBeInstanceOf(BinsRepository)
		})

		it('should treat the repository as a singleton', () => {
			expect(BinsFactory.binsRepository).toBeUndefined()
			const repo = BinsFactory.getRepository()
			expect(BinsFactory.binsRepository).not.toBeUndefined()
			const repo2 = BinsFactory.getRepository()
			expect(repo).toBe(repo2)
		})
	})
	describe('getService', () => {
		it('should instantiate a BinsService', () => {
			const serv = BinsFactory.getService()
			expect(serv).toBeInstanceOf(BinsService)
		})

		it('should use the generated BinsRepository to construct the BinsService', () => {
			const serv = BinsFactory.getService()
			const repo = BinsFactory.getRepository()
			expect(serv.binsRepository).toBe(repo)
		})

		it('should treat the repository as a singleton', () => {
			expect(BinsFactory.binsService).toBeUndefined()
			const service = BinsFactory.getService()
			expect(BinsFactory.binsService).not.toBeUndefined()
			const sameService = BinsFactory.getService()
			expect(service).toBe(sameService)
		})
	})
	describe('getController', () => {
		it('should instantiate a BinsController', () => {
			const controller = BinsFactory.getController()
			expect(controller).toBeInstanceOf(BinsController)
		})

		it('should use the generated BinsService to construct the BinsController', () => {
			const controller = BinsFactory.getController()
			const serv = BinsFactory.getService()
			expect(controller.binsService).toBe(serv)
		})

		it('should treat the repository as a singleton', () => {
			expect(BinsFactory.binsController).toBeUndefined()
			const controller = BinsFactory.getController()
			expect(BinsFactory.binsController).not.toBeUndefined()
			const sameController = BinsFactory.getController()
			expect(controller).toBe(sameController)
		})


	})
})

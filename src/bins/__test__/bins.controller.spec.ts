import type {NextApiRequest, NextApiResponse} from 'next'
import {AdditionalCollections, CollectionType} from 'bins/bins.types'

import BinsController from 'bins/bins.controller'
import BinsService from 'bins/bins.service'
import BinsRepository from 'bins/bins.repository'
import binDatabaseFactory from './fixtures/binDatabaseFactory'

describe('BinsController', () => {
	const jsonMock = jest.fn()
	let controller!: BinsController
	let res: NextApiResponse = {json: jsonMock}
	beforeEach(() => {
		const repository = new BinsRepository()
		const db = binDatabaseFactory()
		Object.defineProperty(repository, 'database', {
			value: db
		})
		const service = new BinsService(repository)
		controller = new BinsController(service)
		jsonMock.mockReset()
	})

	describe('getNext', () => {
		it('should send the next date', () => {
			controller.getNext({method: 'GET'} as unknown as NextApiRequest, res)
			expect(jsonMock).toHaveBeenCalledWith({
				collectionDate: new Date('2022-01-11'),
				binType: CollectionType.Waste,
				additionalCollection: AdditionalCollections.Garden,
			})
		})
	})

	describe('getAll', () => {
		it('should send all dates', () => {
			controller.getAll({method: 'GET'} as unknown as NextApiRequest, res)
			const allMapped = BinsService.mapCollectionsToDate(binDatabaseFactory())
			expect(jsonMock).toHaveBeenCalledWith(allMapped)
		})
	})
})

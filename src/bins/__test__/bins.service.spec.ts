import BinsService from 'bins/bins.service'
import BinsRepository from 'bins/bins.repository'
import binDatabaseFactory from 'bins/__test__/fixtures/binDatabaseFactory'
import {CollectionType} from 'bins/bins.types'

describe('BinsService', () => {
	let binsService!: BinsService
	beforeEach(() => {
		const testDb = binDatabaseFactory()
		const repo = new BinsRepository()
		Object.defineProperty(repo, 'database', {
			value: testDb,
		})
		binsService = new BinsService(repo)
		const testDate = new Date('2022-02-01')
		jest.setSystemTime(testDate)
	})

	// todo: potentially put this in to startup
	beforeAll(() => {
		jest.useFakeTimers()
	})

	afterAll(() => {
		jest.useRealTimers()
	})

	describe('serializeBins', () => {
		it('should flatten a series of collections', () => {
			expect(binsService.serializeBins({
				collectionDate: new Date(),
				binType: CollectionType.Waste,
			})).toStrictEqual({
				collectionDate: '2022-02-01T00:00:00.000Z',
				binType: CollectionType.Waste,
			})
		})

	})
	describe('findByMonth', () => {
		it('should find by month number', () => {
			const collections = binsService.findByMonth(1)
			expect(collections).toHaveLength(3)
		})
		it('should not initialise the date', () => {
			const collections = binsService.findByMonth(1)
			expect(typeof collections[0].collectionDate).toBe('string')
		})

		it('should find the nearest collection', () => {
			jest.setSystemTime(new Date('2022-02-02'))
			binsService.findAll = () => {
				return [
					{
						collectionDate: new Date('2022-02-10'),
						binType: CollectionType.Waste,
					},
					{
						collectionDate: new Date('2022-02-03'),
						binType: CollectionType.Waste,
					}
				]
			}

			const next = binsService.findNext()
			expect(next.collectionDate).toStrictEqual(new Date('2022-02-03'))
		})
	})
	describe('findNext', () => {
		it('should fetch the next collection date', () => {
			const next = binsService.findNext()
			expect(next.collectionDate.getMonth()).toBe(1)
		})

		it('should serialize collection dates', () => {
			const next = binsService.findNext()
			expect(next.collectionDate).toBeInstanceOf(Date)
		})

	})
	describe('findAll', () => {
		it('should fetch all dates', () => {
			const allCollections = binsService.findAll()
			expect(allCollections).toHaveLength(4)
		})
	})
})


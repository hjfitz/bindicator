import BinsRepository from 'bins/bins.repository'
import binDatabaseFactory from 'bins/__test__/fixtures/binDatabaseFactory'

describe('Bin Repository', () => {
	const repository = new BinsRepository()
	const db = binDatabaseFactory()
	Object.defineProperty(repository, 'database', {
		value: db
	})
	describe('findByMonth', () => {
		it('should fetch the next one by month number', () => {
			const jan = repository.findByMonthAbstract(1)
			expect(jan).toHaveLength(3)
			const feb = repository.findByMonthAbstract(2)
			expect(feb).toHaveLength(1)
		})

		it('should find next by month short name', () => {
			const next = repository.findByMonthAbstract('jan')
			expect(next).toHaveLength(3)
		})

		it('should find next by month long name', () => {
			const next = repository.findByMonthAbstract('january')
			expect(next).toHaveLength(3)
		})


		it('should find next by month name, case insensitive', () => {
			const next = repository.findByMonthAbstract('JaNuArY')
			expect(next).toHaveLength(3)
		})

		it('should return an empty array if there is no collection next', () => {
			const next = repository.findByMonthAbstract(13)
			expect(next).toHaveLength(0)
		})
	})

	describe('findAll', () => {
		it('should return all collection dates', () => {
			expect(repository.findAll()).toBeInstanceOf(Array)
			expect(repository.findAll()).not.toBeInstanceOf(String)
		})
	})
})

import db from './bins.database'
import type {BinCollectionFlat} from './bins.types'

export default class BinRepository {
	private readonly database = db

	private findByMonthName(month: string): BinCollectionFlat[] {
		return this.database.filter(collection => {
			const date = new Date(collection.collectionDate)
			const foundMonth = date.toLocaleString('en-us', {month: 'long'}).toLowerCase()
			return foundMonth.indexOf(month.toLowerCase()) === 0
		})
	}

	private findByMonthNumber(month: number): BinCollectionFlat[] {
		return this.database.filter(collection => {
			const date = new Date(collection.collectionDate)
			return (date.getMonth() + 1) === month
		})
	}

	findByMonthAbstract(month: string | number): BinCollectionFlat[] {
		if (typeof month === 'string') {
			return this.findByMonthName(month)
		} else {
			return this.findByMonthNumber(month)
		}
	}

	findAll(): BinCollectionFlat[] {
		return this.database
	}
}

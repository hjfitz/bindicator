import BinsRepository from 'bins/bins.repository'
import type {
	BinCollectionFlat, 
	InitialisedBinCollection
} from 'bins/bins.types'

export default class BinService {
	constructor(private readonly binsRepository: BinsRepository) {}

	private static mapCollectionsToDate(
		bins: BinCollectionFlat[]
	): InitialisedBinCollection[] {
		return bins.map((bin) => {
			const {collectionDate, ...rest} = bin
			return {...rest, collectionDate: new Date(collectionDate)}
		})
	}
	
	serializeBins(bins: InitialisedBinCollection): BinCollectionFlat {
		return JSON.parse(JSON.stringify(bins)) as BinCollectionFlat
	}

	findByMonth(month: string | number) {
		return this.binsRepository.findByMonthAbstract(month)
	}

	findNext() {
		const now = new Date()
		const allCollections = this.findAll()
		const afterNowSorted = allCollections
			.filter(collection => collection.collectionDate > now)
			.sort((coll1, coll2) => {
				const coll1Val = coll1.collectionDate.valueOf()
				const coll2Val = coll2.collectionDate.valueOf()
				return coll1Val - coll2Val
			})
		return afterNowSorted[0]
	}

	findAll(): InitialisedBinCollection[] {
		return BinService.mapCollectionsToDate(
			this.binsRepository.findAll()
		)
	}
}

export function binServiceFactory() {
	const binsRepository = new BinsRepository()
	return new BinService(binsRepository)
}


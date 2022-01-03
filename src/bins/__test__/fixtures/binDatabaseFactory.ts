import {
	AdditionalCollections, 
	BinCollectionFlat, 
	CollectionType
} from 'bins/bins.types'

export default function binDatabaseFactory(): BinCollectionFlat[] {
	return [
		{
			collectionDate: '2022-01-11',
			binType: CollectionType.Waste,
			additionalCollection: AdditionalCollections.Garden,
		},
		{
			collectionDate: '2022-01-18',
			binType: CollectionType.Recycle,
		},
		{
			collectionDate: '2022-01-25',
			binType: CollectionType.Waste,
			additionalCollection: AdditionalCollections.Garden,
		},
		{
			collectionDate: '2022-02-02',
			binType: CollectionType.Waste,
			additionalCollection: AdditionalCollections.Garden,
		},
	]
}

export enum CollectionType {
	Recycle  = 'recycle',
	Waste = 'waste',
}

export enum AdditionalCollections {
	Garden = 'garden',
	Glass = 'glass',
}

interface BinCollectionBase<T> {
	collectionDate: T 
	binType: CollectionType
	additionalCollection?: AdditionalCollections
}

export type BinCollectionFlat = BinCollectionBase<string>
export type InitialisedBinCollection = BinCollectionBase<Date>

import React from 'react'

import {CollectionType} from 'bins/bins.types'
import toTitleCase from 'utils/toTitleCase'

const BinType = ({binType}: {binType: CollectionType}) => {
	const typeTitle = toTitleCase(binType)
	if (binType === CollectionType.Waste) {
		return <span className="">{typeTitle}</span>
	}
	return <span className="text-green-700">{typeTitle}</span>
}

export default BinType


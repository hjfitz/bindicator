import {CollectionType} from 'bins/bins.types'
import React from 'react'

export interface TrashProps {
	className?: string
	binType: CollectionType
}

const srces = {
	[CollectionType.Waste]: '/rubbish.png',
	[CollectionType.Recycle]: '/recycle.png',
}

const Trash = ({className, binType}: TrashProps) => {
	return <img src={srces[binType]} className={className ?? ''} />
}

export default Trash

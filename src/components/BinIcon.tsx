import {CollectionType} from 'bins/bins.types'
import React from 'react'

export interface TrashProps {
	className?: string
	binType: CollectionType
}

export const bins = {
	[CollectionType.Waste]: {
		url: '/rubbish.png',
		alt: 'A rubbish bin',
	},
	[CollectionType.Recycle]: {
		url: '/recycle.png',
		alt: 'A recycle bin',
	},
}

const Trash = ({className, binType}: TrashProps) => {
	const {url, alt} = bins[binType]
	return <img src={url} alt={alt} className={className ?? ''} />
}

export default Trash

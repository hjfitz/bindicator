import React from 'react'
import formatDistance from 'date-fns/formatDistanceToNow'
import differenceInDays from 'date-fns/differenceInDays'

const BinCountdown = ({days}: {days: string}) => {
	const next = new Date(days)
	const nextDays = formatDistance(next)
	const difference = differenceInDays(next, Date.now())
	let className = 'text-3xl'

	if (difference <= 1) {
		className += ' text-red'
	}

	return <h1 className={className}>Next collection is in {nextDays}</h1>
}

export default BinCountdown

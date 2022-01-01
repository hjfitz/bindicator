import {GetServerSideProps, InferGetServerSidePropsType} from 'next'
import Head from 'next/head'

import formatDistance from 'date-fns/formatDistanceToNow'
import differenceInDays from 'date-fns/differenceInDays'

import {BinCollectionFlat, CollectionType} from 'bins/bins.types'
import BinsFactory from 'bins/bins.factory'
import TrashBin from 'resources/trash.svg'

interface HomeProps {
	next: BinCollectionFlat
}

export function toTitleCase(str: string): string {
	const [first, ...chars] = str.split('')
	return first.toUpperCase() + chars.join('')
}

const BinType = ({binType}: {binType: CollectionType}) => {
	const typeTitle = toTitleCase(binType)
	if (binType === CollectionType.Waste) {
		return <span className="">{typeTitle}</span>
	}
	return <span className="text-green-700">{typeTitle}</span>
}

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

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Home = (props: HomePageProps) => {
	return (
		<>
			<Head>
				<title>Bindicator</title>
				<meta name="description" content="When is my bin being collected next?" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="h-full min-h-screen dark:bg-slate-900 dark:text-slate-200">
				<div className="flex flex-col py-4 mx-auto w-96">
				<section className="text-center">
					<BinCountdown days={props.next.collectionDate} />
					<h2><BinType binType={props.next.binType} /> is being collected</h2>
					{props.next.additionalCollection && (
						<h2>Dont forget to put out {props.next.additionalCollection}!</h2>
					)}
				</section>
					<section className="my-4 dark:invert">
					<TrashBin binType={props.next.binType} className="mx-auto" />
				</section>
				</div>
			</main>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const binsService = BinsFactory.getService()
	return {
		props: {
			next: binsService.serializeBins(binsService.findNext()),
		}
	}
}

export default Home

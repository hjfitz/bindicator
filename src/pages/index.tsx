import {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {BinCollectionFlat} from 'bins/bins.types'
import BinsFactory from 'bins/bins.factory'

import {BinCountdown, BinType, BinIcon} from 'components'

interface HomeProps {
	next: BinCollectionFlat
}

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Home = (props: HomePageProps) => (
	<div className="flex flex-col py-4 mx-auto w-96">
		<section className="text-center">
			<BinCountdown days={props.next.collectionDate} />
			<h2><BinType binType={props.next.binType} /> is being collected</h2>
			{props.next.additionalCollection && (
				<h2>Dont forget to put out {props.next.additionalCollection}!</h2>
			)}
		</section>
		<section className="my-4 dark:invert">
			<BinIcon binType={props.next.binType} className="mx-auto" />
		</section>
	</div>
)

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const binsService = BinsFactory.getService()
	return {
		props: {
			next: binsService.serializeBins(binsService.findNext()),
		}
	}
}

export default Home

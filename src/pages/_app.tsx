import {AppProps} from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import 'styles/globals.css'

const gtagID = process.env.NEXT_PUBLIC_GTAG_ID

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Bindicator</title>
			<meta name="description" content="When is my bin being collected next?" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Script 
			async 
			src={`https://www.googletagmanager.com/gtag/js?id=${gtagID}`} 
		/>
		<Script>
			{`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${gtagID}');
			`}
		</Script>
		<main className="h-full min-h-screen dark:bg-slate-900 dark:text-slate-200">
			<Component {...pageProps} />
		</main>
	</>
)

export default App

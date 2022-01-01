import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<Script 
					async 
					src="https://www.googletagmanager.com/gtag/js?id=G-KG5CBGVB2C" 
				/>
				<Script>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-KG5CBGVB2C');
					`}
				</Script>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

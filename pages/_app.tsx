import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { GlobalStyle } from '../theme/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>Some title</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
		</Head>
		<GlobalStyle />
		<Component {...pageProps} />
	</>;
}

export default MyApp;
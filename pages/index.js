import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from './components/HomePage'
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Web Builder</title>
				<meta

				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<HomePage />
			</main>
		</div>
	)
}

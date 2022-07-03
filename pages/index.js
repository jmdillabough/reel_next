import Head from 'next/head'
import clientPromise from '../lib/mongodb'

import Hero from './hero'

export default function Home({isConnected}) {
	return (
		<div className='w-screen h-screen overflow-hidden' data-theme='night'>
			<Head>
				<title>Reel Ratings</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
		</div>
	)
}

export async function getServerSideProps(context) {
	try {
		await clientPromise
		return {
			props: {isConnected: true}
		}
	} catch (e) {
		console.error(e)
		return {
			props: {isConnected: false}
		}
	}
}

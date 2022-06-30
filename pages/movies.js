import Movie from '../components/Movie'

export default function movies({movies}) {
	return (
		<div>
			<div>
				<h2 className='text-center text-3xl py-7 font-extrabold'>
					Popular Movies
				</h2>
			</div>
			<Movie movies={movies} />
		</div>
	)
}

export async function getServerSideProps(context) {
	const baseUrl = `https://api.themoviedb.org/3/movie/`
	const results = await fetch(
		`${baseUrl}popular?api_key=${process.env.TMBD_API}`
	)
	let movies = await results.json()
	return {
		props: {
			movies
		}
	}
}

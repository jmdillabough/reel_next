import Movie from '../components/Movie'

export default function movies({movies}) {
	return (
		<div className='py-10'>
			<div>
				<h2 className='"text-2xl font-extrabold sm:text-3xl lg:text-5xl text-center font-title mb-2 mt-10"'>
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
	console.log(movies)
	return {
		props: {
			movies
		}
	}
}

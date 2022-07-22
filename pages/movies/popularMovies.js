import Movie from '../../components/Movie'

export default function movies({popMovies}) {
	return (
		<div className='py-10 mx-auto'>
			<div>
				<h2 className='"text-2xl font-extrabold sm:text-3xl lg:text-5xl text-center font-title mb-2 mt-10"'>
					Popular Movies
				</h2>
			</div>
			<Movie popMovies={popMovies} />
		</div>
	)
}

export async function getServerSideProps() {
	const baseUrl = `https://api.themoviedb.org/3/movie/`
	const results = await fetch(
		`${baseUrl}popular?api_key=${process.env.TMDB_API}`
	)
	let popMovies = await results.json()
	return {
		props: {
			popMovies
		}
	}
}

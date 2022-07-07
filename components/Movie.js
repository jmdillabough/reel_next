import Button from './styled components/Button'

export default function Movie({movies}) {
	return (
		<div className='flex flex-wrap gap-2 p-12'>
			{movies.results?.length === 0 ? (
				<div>
					<h4>Loading...</h4>
				</div>
			) : (
				movies.results?.map((movie) => (
					<div
						className='relative w-4/5 lg:w-1/5 md:w-4/12 card bg-base-100 shadow-2xl mx-auto mb-4'
						key={movie.id}
					>
						<figure className='hover:opacity-100 opacity-90'>
							<img
								src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
								alt='Movie'
							/>
						</figure>
						<div className=''>
							<div className='absolute top-2 right-2 font-bold text-gray-700 rounded-full shadow-2xl bg-red-500 flex items-center justify-center font-mono h-10 w-10'>
								<p className='text-center text-white'>{movie.vote_average}</p>
							</div>
						</div>
						<div className='card-body'>
							<h2 className='card-title text-base justify-center mb-2'>
								Rating: {movie.vote_average}
							</h2>
							<div className='card-actions  justify-center'>
								<Button text={'Read more'} />
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

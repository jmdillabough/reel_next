import Button from './styled components/Button'

export default function Movie({movies}) {
	return (
		<div className='w-screen h-screen flex flex-wrap gap-4 p-10'>
			{movies.results?.length === 0 ? (
				<div>
					<h4>Loading...</h4>
				</div>
			) : (
				movies.results?.map((movie) => (
					<div
						className='card w-1/5 bg-base-100 shadow-xl mx-auto'
						key={movie.id}
					>
						<figure>
							<img
								src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
								alt='Movie'
							/>
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>Rating: {movie.vote_average}</h2>
							<div className='card-actions  justify-centrer'>
								<Button text={'Read more'} />
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

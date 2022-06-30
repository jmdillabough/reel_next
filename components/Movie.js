export default function Movie({movies}) {
	return (
		<div className='w-screen h-screen flex flex-wrap gap-4 mx-auto p-6'>
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
							<h2 className='card-title'>New movie is released!</h2>
							<p>Click the button to watch on Jetflix app.</p>
							<div className='card-actions  justify-centrer'>
								<button className='btn btn-teal'>See Ratings</button>
							</div>
						</div>
					</div>
				))
			)}
		</div>
	)
}

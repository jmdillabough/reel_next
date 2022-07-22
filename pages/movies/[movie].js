import Image from 'next/image'
import {Router, useRouter} from 'next/router'

export async function getServerSideProps({params}) {
	const baseUrl = `https://api.themoviedb.org/3/movie`
	const res = await fetch(
		`${baseUrl}/${params.movie}?api_key=${process.env.TMDB_API}`
	)
	const data = await res.json()
	return {
		props: {
			data
		}
	}
}

export default function Movie({data}) {
	const router = useRouter()
	return (
		<div className='hero bg-base-100 p-6'>
			<div className='flex-col hero-content lg:flex-row-reverse'>
				<img
					src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
					className='max-w-md rounded-lg shadow-2xl'
				/>
				<div>
					<h3 className='mb-3 text-5xl font-bold'>{data.original_title}</h3>
					<p className='text-2xl font-semibold'>{data.tagline}</p>
					<p className=''>{data.overview}</p>
					<div className='flex gap-4 mt-3 mb-4 text-center justify-start text-gray-500 font-semibold'>
						<p>{data.runtime} mins</p>
						<p>{data.release_date}</p>
						<p>{data.runtime} mins</p>
					</div>
					<button className='btn btn-primary' onClick={() => router.back()}>
						Back to movies page for now...
					</button>
				</div>
			</div>
		</div>
	)
}

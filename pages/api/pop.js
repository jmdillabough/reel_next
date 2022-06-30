// import fetch from 'node-fetch'

// export default async (req, res) => {
// 	const baseUrl = `https://api.themoviedb.org/3/movie/`
// 	try {
// 		const results = await fetch(
// 			`${baseUrl}popular?api_key=${process.env.TMBD_API}`
// 		)
// 		const data = await results.json()
// 		return {
// 			data: JSON.parse(data)
// 		}
// 	} catch (err) {
// 		console.log(err)
// 	}
// }

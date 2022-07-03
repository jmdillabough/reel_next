import connectMongo from '../../lib/mongodb'
import User from '../../models/User'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 *
 */

export default async function addUser(req, res) {
	const {username, password} = req.body
	console.log('Connecting to Mongo')
	await connectMongo()
	console.log('Connected to Mongo')

	const user = await User.create(req.body)

	res.json(user)
}

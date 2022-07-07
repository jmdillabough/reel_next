import connectMongo from '../../lib/mongodb'
import User from '../../models/User'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 *
 */

export default async function addUser(req, res) {
	await connectMongo()
	const {username, password} = req.body
	const userExists = await User.findOne({username})
	if (userExists) {
		res.status(400).json({err: '💣 User is already registered 💣'})
		return
	}
	console.log('Connecting to Mongo')
	console.log('Connected to Mongo')

	const user = await User.create(req.body)

	res.json(user)
}

import bcrypt from 'bcryptjs'
import User from '../../models/User'

export default async function handler(req, res) {
	const {username, password} = req.body
	const user = await User.findOne({username})

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			username: user.username
		})
	} else {
		res.status(400).json({err: '💣 The API exploded 🔥 '})
	}
}

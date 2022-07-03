import mongoose, {connect} from 'mongoose'

export const connectMongo = async () =>
	mongoose.connect(process.env.MONGODB_URI)

export default connectMongo

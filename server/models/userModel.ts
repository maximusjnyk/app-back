import mongoose from 'mongoose'
import { IUser } from '../config/interface'

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please add your name"],
		trim: true,
		maxLength: [20, "Your name is up to 20 chars long."]
	},
	account: {
		type: String,
		required: [true, "Please add your email or phone"],
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: [true, "Please add your password"]
	},
	avatar: {
		type: String,
		default: 'https://sun9-81.userapi.com/impf/wFAgxkUsgRf2H8dxneRbUAHQIoYPDQZA2Ln1gg/ZUm-rfISd7s.jpg?size=2048x1364&quality=96&sign=1a324f3916a710a7b66f5d5672c638c8&type=album'
	},
	role: {
		type: String,
		default: 'user' // admin
	},
	type: {
		type: String,
		default: 'register' // login
	}
}, {
	timestamps: true
})

export default mongoose.model<IUser>('User', userSchema)
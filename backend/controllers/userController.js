import userModel from "../models/userModel.js"
import {validator, bcrypt, JWT} from "../npmImports.js"

const createToken = (id) => {
	return JWT.sign({id}, process.env.JWT_SECRET)
}

// Route for user login
export const loginUser = async (req, res) => {}

// Route for user registration or sign Up
export const registerUser = async (req, res) => {
	try {
		const {name, email, password} = req.body

		// Check if required fields are present
		if (!name || !email || !password) {
			return res.json({
				success: false,
				msg: "All fields are required",
			})
		}

		// Check if user already exists
		const exists = await userModel.findOne({email})
		if (exists) {
			return res.json({
				success: false,
				msg: "User already exits with this email",
			})
		}
		// Validate email format and password strength
		if (!validator.isEmail(email)) {
			return res.json({
				success: false,
				msg: "Please enter a valid email",
			})
		}
		if (password.length < 8) {
			return res.json({
				success: false,
				msg: "Please enter a strong password",
			})
		}
		// Hash password
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		// Save to newUser to the DB
		const newUser = new userModel({
			name,
			email,
			password: hashedPassword,
		})
		const user = await newUser.save()

		// Generate new token
		const token = createToken(user._id)
		res.json({success: true, token})
	} catch (error) {
		console.log(error)

		res.json({
			success: false,
			msg: "Registration of your account has failed",
		})
	}
}

// Route for admin login
export const adminLogin = async (req, res) => {}
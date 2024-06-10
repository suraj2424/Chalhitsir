const mongoose = require("mongoose")
const { createHmac, randomBytes } = require('node:crypto');
const { generateToken } = require("../services/authentication");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        required: true,
        min: 10
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    isAdmin: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    salt: {
        type: String
    }
}, {timestamps: true})

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) {
        return;
    }
    const salt = randomBytes(16).toString("hex")
    const hash = createHmac("sha256", salt).update(user.password).digest("hex")

    this.salt = salt
    this.password = hash

    next()
})

userSchema.static("matchPasswordAndGenerateToken", async function(email, password){
    const user = await User.findOne({ email })
    if(!user) {
        throw new Error("Invalid email")
    }
    if(!user.salt) {
        throw new Error("Invalid key")
    }
    const hash = createHmac("sha256", user.salt).update(password).digest("hex")
    if(hash !== user.password) {
        throw new Error("Invalid password")
    }
    const token = generateToken(user)
    return token
})

const User = mongoose.model("user", userSchema)

module.exports = User
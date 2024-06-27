const User = require("../model/User");
const express = require("express");
const { createHmac } = require("node:crypto");

const router = express.Router();

router.post("/register", async (req,res) => {
    const {name, email, phone, password} = req.body;
    try {
        const user = await User.create({
            name,
            email,
            phone,
            password,
        })
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user" });
    }
})

router.put("/update", async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ email: req.body.email }, req.body)
        res.status(200).send("User updated successfully");
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.post("/login", async (req,res) => {
    const {email, password} = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email,password)
        return res.cookie("token", token).json({ message: "Login Successful" });
    }
    catch(e) {
        return res.status(401).json({ message: e.message });
    }
})


router.delete("/delete/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) return res.status(404).send("No user found");
        res.status(200).send("User deleted successfully");
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/", async (req,res) => {
    const users = await User.find({})
    res.send(users)
})

module.exports = router;
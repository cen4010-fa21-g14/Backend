const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register",  async (req, res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,

    });

    try{
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
});


// router.get("/register",  async (req, res) => {
//     const user =  await new User({
//         username: "John",
//         email: "john@gmail.com",
//         password: "123456"
//     })

//     await user.save();
//     res.send("ok")
// });

module.exports = router;


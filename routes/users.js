const User = require("../models/User");
const router = require('express').Router();


// router.get('/',(req,res)=>{
//     res.send('hey its user route')
// })

//Update user
router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin ){
        try{
          const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.status(200).json("Account has been updated")

        }catch(err){
            return res.status(500).json(err);
        }

    }else{
        return res.status(403).json("You can update only your account!")
    }
})

//Delete user


//Get a user


//Follow a User


//Unfollow a User

module.exports = router

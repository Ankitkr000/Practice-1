const User = require('../models/userModel.js');




const signup = async (req, res) => {
    try {
       const {name,email,password,dateOfBirth}=req.body;
       const user =await User.findOne({email});

       if(user){
           return res.status(400).send("user already exists");
       }

       const newUser=new User({
           name,
           email,
           password,
           dateOfBirth
       })
       await newUser.save();
       res
         .status(201)
         .send(newUser);
    } catch (error) {
        res.send(500).send("server error")
    }
}

module.exports = {signup};
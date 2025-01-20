const mongoose  = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

        match:[/^[a-zA-Z0-9 ]+$/,"Name must contain only alphabets"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,

        minlength:8,
        validate:{
            validator:validatePassword,
            message:"Password must contain atleast one uppercase,one lowercase,one number and one special character"
        }

      
    },

    dateOfBirth:{
        type:Date,
        required:true,
        validate:{
            validator:validateAge,
            message:"Age must be greater than or equal to 18"

        }
    }
})


function validatePassword(password){
    return (
        /A-Z/.test(password) &&
        /a-z/.test(password) &&
        /0-9/.test(password) &&
        /[!@$^&()<>?]/.test(password) 
        
    )
}



function validateAge(dateOfBirth){
    const today=new Date();
    const age=today.getFullYear()-dateOfBirth.getFullYear();
    return age>=18
}







module.exports=mongoose.model('User',userSchema)
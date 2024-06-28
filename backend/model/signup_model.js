import mongoose from 'mongoose'


const userSchema=new mongoose.Schema(
    {
      
     
       user_email:{
            type:String,required:true,
            unique:true
        },
          user_password:{
            type:String,required:true,minlength:6
        },
        user_name:{
            type:String

        },
        user_phone:{
            type:Number

        },
        user_pic:{
            type:String,
            default:""
        },
        user_gender:{
            type:String,
            enum:["male","female"]
        },

        
    }
)



const User=mongoose.model("Users",userSchema)
export default User;
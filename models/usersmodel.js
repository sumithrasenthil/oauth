const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const UserSchema =new Schema(
    {
        name:String,
        googleId:Number
    },
)
const User =mongoose.model('O-auth',UserSchema);
module.exports=User;
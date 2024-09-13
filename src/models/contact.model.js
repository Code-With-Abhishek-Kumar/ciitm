import { model, Schema  , connect} from "mongoose";

let ContactSchema = new Schema({
 name:{
    type : String,
    required : true,
    lowercase : true,
 },

 email:{
    type : String,
    required : true,
    lowercase : true,

 },

 number:{
    type : Number,
    required : true,
    

 },


 message:{
    type : String,
    required : true,
    

 }

}, {timestamps : true})





let Contact = model('Contact' , ContactSchema)

export default Contact;
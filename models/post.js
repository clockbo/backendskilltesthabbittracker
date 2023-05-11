const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    content:{ type:String,required:true},
    numberofday:{type:Number,default:0},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    tiks:{
        type: Array,
        length: 7,
        required: true,
        default: [0, 0, 0, 0, 0, 0, 0]
      }
},{timestamps:true});
const Post=mongoose.model('Post',postschema);
module.exports=Post;    
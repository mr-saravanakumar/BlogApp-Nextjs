import mongoose, { Schema } from "mongoose";

const postScheme=new Schema({
    topic:{
        type: 'string',
    },
    imgurl:{
        type: 'string',
    },
     description:{
       type:'string'
     },
     date:{
        type:Date,
        default:Date().toLocaleString(),
     }
})

const postModel= mongoose.models.posts|| mongoose.model('posts',postScheme);

export default postModel;
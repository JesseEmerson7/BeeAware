const { Schema, model } = require('mongoose');


const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    author: String,   
    description: String,
    body: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now,
        get: (dateObj) => {
          var month = dateObj.getUTCMonth() + 1; //months from 1-12
          var day = dateObj.getUTCDate();
          var year = dateObj.getUTCFullYear();
  
          var newDate = year + "/" + month + "/" + day;
          return newDate;
        }
    },
    comments: [
        {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ]

},
{
    toJSON: {
      virtuals: true,
      getters: true,
    },
  },
);



const Post = model('post', postSchema);

module.exports = Post;

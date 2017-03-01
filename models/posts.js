var mongoose = require('mongoose');
var Categorys = require('./categories');

//Categories schema

var postsSchema = mongoose.Schema({

    title:{

        type: String,
        required: true
        
    },

    category:{

        type: String,
        required: true
        
    },

    description:{

        type: String,
        required: true
        
    },

    image:{

        type: String,
        required: true
        
    },

    create_date:{

        type: Date,
        default: Date.now
    }


});


var Posts = module.exports = mongoose.model('Posts', postsSchema);

// Get posts

module.exports.getPosts = function(callback, limit){

    Posts.find(callback).limit(limit);
    
}

// Get a single post

module.exports.getPostById = function(id, callback){

    Posts.findById(id, callback);
    
}

//Get post by category

module.exports.getPostByCategory = function(category, callback){


    Posts.find({category: category}, callback);

}

// Add a post

module.exports.addPosts = function(post, callback){

    Posts.create(post, callback);

} 

// Update posts

module.exports.updatePosts = function(id, post, options, callback){

    var query = {_id: id};
    var update = {

        title: post.title,
        category: post.category,
        description: post.description,
        image: post.image

    }
    Posts.findOneAndUpdate(query, update, options, callback);

} 

// Delete a post

module.exports.deletePosts = function(id, callback){
    var query = {_id: id};
    Posts.remove(query, callback);

} 
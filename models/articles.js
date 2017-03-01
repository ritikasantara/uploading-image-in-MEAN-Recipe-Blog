var mongoose = require('mongoose');

//Categories schema

var articlesSchema = mongoose.Schema({

    title:{

        type: String,
        required: true
        
    },

    subtitle:{

        type: String,
        required: true
        
    },


    image:{

        type: String,
        required: true
        
    },


    content:{

        type: String,
        required: true
        
    },


    create_date:{

        type: Date,
        default: Date.now

    }


});


var Articles = module.exports = mongoose.model('Articles', articlesSchema);

// Get articles

module.exports.getArticles = function(callback, limit){

    Articles.find(callback).limit(limit);
    
}

// Get a single article

module.exports.getArticleById = function(id, callback){

    Articles.findById(id, callback);
    
}

// Add an article

module.exports.addArticles = function(article, callback){

    Articles.create(article, callback);

} 

// Update articles

module.exports.updateArticles = function(id, article, options, callback){

    var query = {_id: id};
    var update = {

        title: article.title,
        subtitle: article.subtitle,
        image: article.image,
        content: article.content,
        author: article.author

    }
    Articles.findOneAndUpdate(query, update, options, callback);

} 

// Delete an article

module.exports.deleteArticles = function(id, callback){
    var query = {_id: id};
    Articles.remove(query, callback);

} 
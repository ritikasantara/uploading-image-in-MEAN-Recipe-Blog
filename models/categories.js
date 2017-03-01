var mongoose = require('mongoose');

//Categories schema

var categorySchema = mongoose.Schema({

    name:{

        type: String,
        required: true
        
    },

    create_date:{

        type: Date,
        default: Date.now

    }


});

var Categories = module.exports = mongoose.model('Categories', categorySchema);

// Get categories

module.exports.getCategories = function(callback, limit){

    Categories.find(callback).limit(limit);

}

// Get a single category

module.exports.getCategoryById = function(id, callback){

    Categories.findById(id, callback);
    
}


// Add categories

module.exports.addCategories = function(category, callback){

    Categories.create(category, callback);

} 

// Update categories

module.exports.updateCategories = function(id, category, options, callback){

    var query = {_id: id};
    var update = {

        name: category.name

    }
    Categories.findOneAndUpdate(query, update, options, callback);

} 

// Delete a category

module.exports.deleteCategories = function(id, callback){
    var query = {_id: id};
    Categories.remove(query, callback);

} 
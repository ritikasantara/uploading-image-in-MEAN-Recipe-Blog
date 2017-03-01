var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Categories = require('./models/categories');
Posts = require('./models/posts');
Articles = require('./models/articles');

//connect to mongoose

mongoose.connect('mongodb://localhost/recipeBlog');
var db = mongoose.connection;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/api/categories' , function(req, res){

    Categories.getCategories(function(err, categories){

        if(err){

            throw err;
        }
        res.json(categories);
    })

});



app.post('/api/categories' , function(req, res){

    var category = req.body;

    Categories.addCategories(category,function(err, category){

        if(err){

            throw err;
        }
        res.json(category);
    })

});

app.put('/api/categories/:_id' , function(req, res){

    var id = req.params._id;
    var category = req.body;

    Categories.updateCategories(id, category, {}, function(err, category){

        if(err){

            throw err;
        }
        res.json(category);
    })

});

app.delete('/api/categories/:_id' , function(req, res){

    var id = req.params._id;

    Categories.deleteCategories(id, function(err, category){

        if(err){

            throw err;
        }
        res.json(category);
    })

});


app.get('/api/posts' , function(req, res){

    Posts.getPosts(function(err, posts){

        if(err){

            throw err;
        }
        res.json(posts);
    })

});

app.get('/api/posts/:_id' , function(req, res){

    Posts.getPostById(req.params._id, function(err, post){

        if(err){

            throw err;
        }
        res.json(post);
    })

});

app.get('/api/posts/category/:name' , function(req, res){

    Posts.getPostByCategory(req.params.name, function(err, posts){

        if(err){

            throw err;
        }
        res.json(posts);
    })
      

});

// router.route('/posts/category/:id')
//   .get(function (req, res) {
//     Category.forge({id: req.params.id})
//     .fetch({withRelated: ['posts']})
//     .then(function (category) {
//       var posts = category.related('posts');
//       res.json({error: false, data: posts.toJSON()});
//     })
//     .catch(function (err) {
//       res.status(500).json({error: true, data: {message: err.message}});
//     });
//   });
//     // create a new category
//   .post(function (req, res) {
//     Category.forge({name: req.body.name})
//     .save()
//     .then(function (category) {
//       res.json({error: false, data: {id: category.get('id')}});
//     })
//     .catch(function (err) {
//       res.status(500).json({error: true, data: {message: err.message}});
//     }); 
//   });




app.post('/api/posts' , function(req, res){

    var post = req.body;

    Posts.addPosts(post, function(err, post){

        if(err){

            throw err;
        }
        res.json(post);
    })

});

app.put('/api/posts/:_id' , function(req, res){

    var id = req.params._id;
    var post = req.body;

    Posts.updatePosts(id, post, {}, function(err, post){

        if(err){

            throw err;
        }
        res.json(post);
    })

});

app.delete('/api/posts/:_id' , function(req, res){

    var id = req.params._id;

    Posts.deletePosts(id, function(err, post){

        if(err){

            throw err;
        }
        res.json(post);
    })

});

//Articles

app.get('/api/articles' , function(req, res){

    Articles.getArticles(function(err, articles){

        if(err){

            throw err;
        }
        res.json(articles);
    })

});

 app.get('/api/articles/:_id' , function(req, res){

    Articles.getArticleById(req.params._id, function(err, article){

        if(err){

            throw err;
         }
         res.json(article);
     })

 });

 app.post('/api/articles' , function(req, res){

     var article = req.body;

     Articles.addArticles(article, function(err, article){

         if(err){

             throw err;
         }
         res.json(article);
     })

 });

 app.put('/api/articles/:_id' , function(req, res){

     var id = req.params._id;
     var article = req.body;

     Articles.updateArticles(id, article, {}, function(err, article){

         if(err){
             throw err;
         }
         res.json(article);
     })

 });

 app.delete('/api/articles/:_id' , function(req, res){

     var id = req.params._id;

     Articles.deleteArticles(id, function(err, article){

         if(err){

             throw err;
         }
         res.json(article);
     })

 });



app.listen(8000, function(){

    console.log('Listening on port 8000...');

});



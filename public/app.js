var thisApp = angular.module('recipeBlog', ['ui.router']);

thisApp.config(function($stateProvider, $urlRouterProvider) {
   
    $stateProvider

        .state('home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'views/home.html'

        })

        // .state('home', {
        //     url: '/home',
        //     controller: 'HomeController',
        //     templateUrl: 'views/home.html'

        // })

        .state('maincourse', {
            url: '/:scrollTo',  
            controller: 'HomeController', 
            templateUrl: 'views/home.html'
        })

        .state('snacks', {
            url: '/:scrollTo',     
            controller: 'HomeController',  
            templateUrl: 'views/home.html'
        })

         .state('starters', {
            url: '/:scrollTo',     
            controller: 'HomeController',  
            templateUrl: 'views/home.html'
        })

         .state('desserts', {
            url: '/:scrollTo',     
            controller: 'HomeController',  
            templateUrl: 'views/home.html'
        })

         .state('beverages', {
            url: '/:scrollTo',     
            controller: 'HomeController',  
            templateUrl: 'views/home.html'
        })

         .state('popular', {
            url: '/:scrollTo',     
            controller: 'HomeController',  
            templateUrl: 'views/home.html'
        })

        .state('maincourse_recipes', {
            url: '/recipes/maincourse',     
            controller: 'HomeController', 
            templateUrl: 'views/maincourse_recipes.html'
        })

        .state('snacks_recipes', {
            url: '/recipes/snacks',     
            controller: 'HomeController', 
            templateUrl: 'views/snacks_recipes.html'
        })

        .state('starters_recipes', {
            url: '/recipes/starters',     
            controller: 'HomeController', 
            templateUrl: 'views/starters_recipes.html'
        })

        .state('desserts_recipes', {
            url: '/recipes/desserts',     
            controller: 'HomeController', 
            templateUrl: 'views/desserts_recipes.html'
        })

        .state('beverages_recipes', {
            url: '/recipes/beverages',     
            controller: 'HomeController', 
            templateUrl: 'views/beverages_recipes.html'
        })

        .state('popular_recipes', {
            url: '/recipes/popular',     
            controller: 'HomeController', 
            templateUrl: 'views/popular_recipes.html'
        })

        .state('recipe_by_id', {
            url: '/recipes/details/:id',     
            controller: 'HomeController', 
            templateUrl: 'views/recipe_details.html'
        })

        .state('article_by_id', {
            url: '/articles/details/:id',     
            controller: 'HomeController', 
            templateUrl: 'views/articleDetails.html'
        })

        
        .state('add_maincourse_recipes', {
            url: '/maincourse_recipes/add',     
            controller: 'HomeController',
            templateUrl: 'views/addMaincourseRecipe.html'

            
        })

        .state('add_snacks_recipes', {
            url: '/snacks_recipes/add',     
            controller: 'HomeController',
            templateUrl: 'views/addSnacksRecipe.html'

            
        })

        .state('add_starters_recipes', {
            url: '/starters_recipes/add',     
            controller: 'HomeController',
            templateUrl: 'views/addStartersRecipe.html'

            
        })

        .state('add_desserts_recipes', {
            url: '/desserts_recipes/add',     
            controller: 'HomeController',
            templateUrl: 'views/addDessertsRecipe.html'

            
        })

        .state('add_beverages_recipes', {
            url: '/beverages_recipes/add',     
            controller: 'HomeController',
            templateUrl: 'views/addBeveragesRecipe.html'

            
        })

        .state('add_popular_recipes', {
            url: '/popular_recipes/add',     
            controller: 'HomeController',
            templateUrl: 'views/addPopularRecipe.html'

            
        })

        .state('add_articles', {
            url: '/articles/add',     
            controller: 'HomeController',
            templateUrl: 'views/addArticles.html'

            
        })


        .state('edit_recipes', {
            url: '/recipes/edit/:id',     
            controller: 'HomeController',
            templateUrl: 'views/editRecipes.html'

            
        })

        .state('edit_articles', {
            url: '/articles/edit/:id',     
            controller: 'HomeController',
            templateUrl: 'views/editArticles.html'

            
        });



        
    $urlRouterProvider.otherwise('/');
        
});



thisApp.run(function($rootScope, $location, $anchorScroll, $stateParams, $timeout) { 
  $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
    $timeout(function() { 
      $location.hash($stateParams.scrollTo);
      $anchorScroll()
    }, 200)
  });
})

thisApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);





// var app = angular.module('recipeBlog', ['ngRoute'])

//                     .config(function($routeProvider){

//                             $routeProvider

//                                 .when('/', 
//                                 {
//                                     controller: 'HomeController',
//                                     templateUrl: 'views/home.html'
//                                 })

//                                 .when('/home', {

//                                     controller: 'HomeController',
//                                     templateUrl: 'views/home.html'

//                                 })

//                                 .when('/recipes/maincourse', {

//                                     controller: 'maincourse',
//                                     templateUrl: 'views/maincourse_recipes.html'

//                                 })

//                                 .when('/recipes/maincourse/:id', {

//                                     controller: 'maincourse',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/snacks', {

//                                     controller: 'snacksCtrl',
//                                     templateUrl: 'views/snacks_recipes.html'
//                                 })

//                                 .when('/recipes/snacks/:id', {

//                                     controller: 'snacksCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/starters', {

//                                     controller: 'startersCtrl',
//                                     templateUrl: 'views/starters_recipes.html'
//                                 })

//                                 .when('/recipes/starters/:id', {

//                                     controller: 'startersCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/desserts', {

//                                     controller: 'dessertsCtrl',
//                                     templateUrl: 'views/desserts_recipes.html'
//                                 })

//                                 .when('/recipes/desserts/:id', {

//                                     controller: 'dessertsCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/beverages', {

//                                     controller: 'beveragesCtrl',
//                                     templateUrl: 'views/beverages_recipes.html'
//                                 })

//                                 .when('/recipes/beverages/:id', {

//                                     controller: 'beveragesCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })

//                                 .when('/recipes/popular', {

//                                     controller: 'popularCtrl',
//                                     templateUrl: 'views/popular_recipes.html'
//                                 })

//                                 .when('/recipes/popular/:id', {

//                                     controller: 'popularCtrl',
//                                     templateUrl: 'views/recipe_details.html'
//                                 })
                                
//                                 .when('/recipes/add', {

//                                     controller: 'adminCtrl',
//                                     templateUrl: 'views/addRecipes.html'
//                                 })

//                                 .when('/recipes/edit', {

//                                     controller: 'adminCtrl',
//                                     templateUrl: 'views/editRecipes.html'
//                                 })

//                                 .when('/article/:id', {

//                                     controller: 'articleCtrl',
//                                     templateUrl: 'views/article_details.html'
//                                 })
                        
//                                 .otherwise({ redirectTo: '/' });
                                
//                         });


              


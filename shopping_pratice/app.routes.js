app.config(function($routeProvider){
    $routeProvider
    .when('/shop',{
        templateUrl:'products/products-template.html',
        controller:'productsController'
    })
    .when('/home',{
        templateUrl:'homepage/homepage-template.html',
        
    })
    .when('/cart',{
        templateUrl:'cart/cart-template.html',
        controller:'cartcontroller'
    }
       
    ). otherwise({
        redirectTo: '/shop'
    });
    


});
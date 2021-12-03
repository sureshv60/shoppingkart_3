angular.module('shopapp').controller('productsController',function($location,$scope,Dataservice,$http,CartService)
{
    $scope.products=[];
    $scope.addtocart = function(item){
      console.log('clicked');
      CartService.addtoCart(item);

    };
    
    $scope.searchtitle='';
 
    $scope.$on('broadcast_search_text', function() {
      console.log('reaching3');
      $scope.searchtitle = Dataservice.searchtext; 
  });

   
    $http
    .get("https://fakestoreapi.com/products")
    .then(function (response) {
      console.log(response.data);
      $scope.products=response.data;
      $scope.products.forEach( obj => {
        Object.assign(obj,{quantity:1,total:obj.price})
      });
      console.log( $scope.products);
    });
    
    $scope.products_sort =function(index1){
      let temp=["","electronics","men's clothing","jewelery"]
      if(index1==0){

        $http
    .get("https://fakestoreapi.com/products")
    .then(function (response) {
      console.log(response.data);
      $scope.products=response.data;
      $scope.products.forEach( obj => {
        Object.assign(obj,{quantity:1,total:obj.price})
      });
    });
      }
      else{

        $http
    .get(`https://fakestoreapi.com/products/category/${temp[index1]}`)
    .then(function (response) {
      console.log(response.data);
      $scope.products=response.data;
      $scope.products.forEach( obj => {
        Object.assign(obj,{quantity:1,total:obj.price})
      });
    });
      };

     
      
      


    }
    
})
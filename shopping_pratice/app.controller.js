angular.module('shopapp').controller('main',function($location,$scope,Dataservice,CartService,$http)
{
    $scope.showlogin=false;
    $scope.toggleLogin=function(){
        $scope.showlogin=!$scope.showlogin;
        Dataservice.setLogin($scope.showlogin);
    };
    $scope.linktocart=function(){
        $location.path('/cart');
    }
    $scope.totalItem =0;
    $scope.$on('handleBroadcast_cartproducts', function() {
        $scope.totalItem  = CartService.cartItemList.length; 
    });
    $scope.searchtext='';
    
    $scope.putsearchtext=function(text1){
        console.log("reaching")
        Dataservice.setsearchtext(text1);

    }
    
})

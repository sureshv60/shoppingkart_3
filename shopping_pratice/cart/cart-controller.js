angular.module('shopapp').controller('cartcontroller',function($location,$scope,CartService,$http){

    $scope.products =CartService.cartItemList;
    $scope.grandTotal=CartService.getTotalPrice();

    $scope.$on('handleBroadcast_cartproducts', function() {
        $scope.products  = CartService.cartItemList; 
        $scope.grandTotal= CartService.getTotalPrice();
    });

    $scope.removeItem = function(item){
        CartService.removeCartItem(item);
    }

    $scope.empty_cart= function(){
        CartService.removeAllCart();
    }

    $scope.redirect_to_shop= function(){
        $location.path('/shop');
    }

});
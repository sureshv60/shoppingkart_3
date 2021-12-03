angular.module('shopapp').factory("CartService",function ($http,$rootScope,$location){
    
    var CartService={};
 
     CartService.cartItemList=[];
     CartService.productList = [];
     CartService.buffered;

     CartService.getProducts=function(){
         return this.productList;
     };

     CartService.setProduct=function(product){
         this.productList.push(product);
         this.buffered=product;
         this.broadcastproductList();
     };
      
     CartService.addtoCart=function(product){

       this.cartItemList.push(product);
       this.buffered=this.cartItemList;
       this.broadcastproductList();
       console.log(this.cartItemList);


     };

     CartService.getTotalPrice = function(){
         let grandTotal = 0;
         this.cartItemList.map((a)=>{
                grandTotal += a.total;
         })

         return grandTotal;
     };

     CartService.removeCartItem = function(product){

        this.cartItemList.map((a,index)=>{
            if(product.id === a.id){
                    this.cartItemList.splice(index,1);
            }
        });
        this.broadcastproductList();
        
     };

     CartService.removeAllCart = function(){
            this.cartItemList=[];
            this.buffered=this.cartItemList;
            this.broadcastproductList();
            
        };

     CartService.broadcastproductList = function(){
        $rootScope.$broadcast('handleBroadcast_cartproducts');
    }
    
  

    return CartService;
 });
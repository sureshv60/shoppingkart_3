angular.module('shopapp').factory("Dataservice",function ($http,$rootScope,$location){
    
   var Dataservice={};

   Dataservice.users=[{username:'Suresh Vunnam',email:'nsuresh062@gmail.com',password:'Password@123'}];

   Dataservice.showlogin=false;

   Dataservice.setLogin = function(tloginvalue){
    Dataservice.showlogin=tloginvalue;
    this.broadcastLogin()
   };
   

   Dataservice.broadcastLogin = function(){
       $rootScope.$broadcast('handleBroadcast_login');
   }

   Dataservice.getLogin = function (){
       return Dataservice.showlogin;
   };

   Dataservice.verifyLogin = function (username,password){

       let flag = false;
       console.log(username);
       for(var i=0;i<this.users.length;i++){
           if(this.users[i].email==username){
               console.log('reached here too')
               if(this.users[i].email==username && this.users[i].password==password ){
                $location.path('/shop');
               }
           }
           
       }
       

   }

   Dataservice.registerUser = function(username,email,password){
       this.users.push({username,email,password});
       console.log(this.users.length);
   }

   Dataservice.searchtext='';
   Dataservice.setsearchtext= function(text1){
    console.log('reaching2');
    this.searchtext=text1;
    this.broadcastsearchtext();

   }
   
   Dataservice.broadcastsearchtext = function(){
    $rootScope.$broadcast('broadcast_search_text');
   }

   

   return Dataservice;
});
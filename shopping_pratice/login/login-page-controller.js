angular.module('shopapp').controller('logincontroller',function($location,$scope,Dataservice,$http)
{
    $scope.showLogin=false;
    $scope.lusername='';
    $scope.lpassword='';

    $scope.rusername='';
    $scope.rpassword='';
    $scope.rphonenumber='';
    $scope.remail='';

    $scope.$on('handleBroadcast_login', function() {
        $scope.showLogin = Dataservice.getLogin(); 
    });
    $scope.showpage='login';
    $scope.setpageblock = function(){
        if($scope.showpage=='login'){
            $scope.showpage='signup';
        }
        else{
            $scope.showpage='login';
        }
    }

    $scope.onloginclick=function(lusername,lpassword){
        Dataservice.verifyLogin(lusername,lpassword);
    }


    $scope.onsignupclick=function(rusername,remail,rphonenumber,rpassword){
        Dataservice.registerUser(rusername,remail,rpassword);
    }

})
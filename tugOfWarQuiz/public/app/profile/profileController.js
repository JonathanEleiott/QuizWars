angular.module('tugOfWarApp').controller('profileController', function($rootScope, $scope, $location) {
  console.log('inside profileController');
  
  $scope.changeName = (name) => {
    console.log('name', name);
    const newNameInputEle = document.querySelector('.newName');
    
    newNameInputEle.value = '';
    $rootScope.name = name;
    $scope.name = name;
  }

  $scope.goToHomePage = () => {
    $location.path('/home');
    $rootScope.apply();
  }

  $scope.logout = () => {
    $rootScope.loggedIn = false;
    $location.path('/login');
    $rootScope.apply();
  }
})
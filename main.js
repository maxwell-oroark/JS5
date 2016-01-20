var myApp = angular.module('myApp',[]);

myApp.controller('main-controller',['$scope', function($scope){

	$scope.greeting = 'RELIEF EFFORT'

	$scope.victims = []
	$scope.volunteers = []

	$scope.addVictim = function(){
		$scope.victims.push($scope.newVictim);
		$scope.newVictim = {};
		console.log($scope.victims)
	}

	$scope.addVol = function(){
		$scope.volunteers.push($scope.newVol);
		$scope.newVol = {}
		console.log($scope.volunteers)
	}

	







}])














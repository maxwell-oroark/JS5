var myApp = angular.module('myApp',[]);

myApp.controller('main-controller',['$scope','$timeout', function($scope, $timeout){
	$scope.light = false;
	$scope.match = false;

	$scope.victims = []
	$scope.volunteers = []

	$scope.addVictim = function(){
		
		$scope.victims.push($scope.newVictim);
		$scope.newVictim = {};
		console.log($scope.victims)
		$scope.checkMatch();
		$scope.lightOn();

	}

	$scope.addVol = function(){
		
		$scope.volunteers.push($scope.newVol);
		$scope.newVol = {}
		console.log($scope.volunteers)
		$scope.lightOn();

	}

	$scope.checkMatch = function(){
		for (i = 0; i < $scope.volunteers.length; i++) {
		if ($scope.victims[$scope.victims.length - 1].address === $scope.volunteers[i].address){
			$scope.volunteers[i].match = true;
		}

	}
	}

	$scope.lightOn = function(){
		$scope.light = true;
		$timeout(function(){
			$scope.light=false;
		},2000)
	}



	

	// $scope.lightOn = function(){
	// 	$scope.light = true;
	// }

	// $timeout([lightOn],[1000])


}])














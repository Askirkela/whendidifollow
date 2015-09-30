var app = angular.module('TwitchFollowing', []);

app.controller('FollowsController', ['$scope', '$http', function(scope, http){
	scope.total = 0;
	scope.getFollows = function(userName) {
		console.log("Username : "+userName);
		http.get('https://api.twitch.tv/kraken/users/'+userName+'/follows/channels?limit=100')
		.then(function successCallback(response){
			scope.follows = response.data;
			scope.total = response.data._total;
			console.log(scope.follows);
		}, 
			function errorCallback(response) {
			console.log(response);
		})
	};
}]);
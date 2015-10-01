var app = angular.module('TwitchFollowing', []);

app.controller('FollowsController', ['$scope', '$http', function(scope, http){
	scope.followsTotal = 0;
	scope.followersTotal = 0;
	/*
	 * Send a HTTP request to the Twitch API.
	 * Response format is a classic HTTP response (headers, data, etc...)
	 * We store the response's data in our scope and update the total
	 */
	scope.getFollows = function(userName) {
		http.get('https://api.twitch.tv/kraken/users/'+userName+'/follows/channels?limit=100')
		.then(function successCallback(response){
			scope.followsData = response.data;
			scope.followsTotal = response.data._total;
		});
		http.get('https://api.twitch.tv/kraken/channels/'+userName+'/follows?limit=100')
		.then(function successCallback(response){
			scope.followersData = response.data;
			scope.followersTotal = response.data._total;
			console.log(scope.followersData);
		});
	};
}]);